import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../Interfaces/Movies';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private movieService : MovieService, private route : ActivatedRoute) { }

  movieId : number = parseInt(this.route.snapshot.paramMap.get('movieId')!);

  movie : Movies ={

    movieId : 0,
    title : "",
    active : false,
    boxOffice : 0,
    genre : "",
    date : new Date("2020/01/07"),
    hasTeaser : false

  };

  editResult! : Movies ;

   ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe(
      res => {
        this.editResult = res
      });
   }

   editMovies(){
    this.movieService.updateMovie(this.movieId, this.editResult)
    .subscribe(
      res => 
            {
              console.log(res);
            });
  }

}
