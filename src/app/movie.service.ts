import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './Interfaces/Movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovieById(movieId :number) {
    return this.http.get<Movies>(`http://localhost:8081/adminMovieList/${movieId}`);
  }

  updateMovie(movieId : number, movie : Movies){
    return this.http.put(`http://localhost:8081/editMovie/${movieId}`, movie)
  }

  addToFav(id:string){
    //const url="http://localhost:8081/addToFavorites";
    //return this.http.post(url,movie,{responseType:'text' as 'json'})
    return this.http.post('http://localhost:8081/addToFavorites',id,
    { 
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTQ0NDE3LCJleHAiOjE2MTU5NDU2MTd9.e8yzHs7O3IsDrrAVjnkse_Km06QEaSu7jucUA9F-KCU")
    }
    ).pipe();
  
  }

  constructor(private http:HttpClient) { }

  getAllMovies():Observable<any>{
    return this.http.get<any>("http://localhost:8081/moviesAngular");
  }
}
