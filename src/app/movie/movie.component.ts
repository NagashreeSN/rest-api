import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movies } from '../Interfaces/Movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:Movies[]=[];
  constructor(private movieService:MovieService) { }

  addToFavorites(id : Number){

    console.log(id);

    let movieId = '';
    movieId += id;

    this.movieService.addToFav(movieId).subscribe(

      data => {console.log(data)}

    );

  }

  // add(movie:Movies){
  //   this.movieService.addToFav(movie).subscribe(
  //     data=>{
  //       console.log(data);
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(response=>{
      this.movies=response;
      console.log(this.movies);
    })
  }

}
