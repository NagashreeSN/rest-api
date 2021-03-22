import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Movies } from '../Interfaces/Movies';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
  
})
export class FavoritesComponent implements OnInit {

  public favorites:Movies[]=[];
  
  constructor(private favoriteService:FavoriteService) { }

  delete(movieId : number){

    console.log(movieId);
    this.favoriteService.removeFavorite(movieId).subscribe(

      data => {
        console.log(data);
       }

    );

  }
  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe(
      data => {
        console.log(data); 
        this.favorites= data}
    );
  }

}


 // delete(movieId:number){
  //   console.log(movieId);
  //   this.favoriteService.removeFavorite(movieId).subscribe(
  //     data=>{
  //       this.ngOnInit();
  //       console.log(data);
  //     }
  //   )
  // }

  // onInIt(){
  //   this.favoriteService.getFavorites().subscribe(
  //     data=>{
  //       this.favorites=data;
  //       console.log(data);
  //     }
  //   );
  // }