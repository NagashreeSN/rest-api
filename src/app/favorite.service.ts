import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  

  constructor(private http:HttpClient) { }

  getFavorites():Observable<any>{

    return this.http.get<any>('http://localhost:8081/viewFavorites',
    { 
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTQ0NDE3LCJleHAiOjE2MTU5NDU2MTd9.e8yzHs7O3IsDrrAVjnkse_Km06QEaSu7jucUA9F-KCU")
    }
    ).pipe();

  }
  
  removeFavorite(movieId:number){
    //  const url='http://localhost:8081/deleteFavorites/'+movieId;
    //  return this.http.delete(url);
    return this.http.delete(`http://localhost:8081/deleteFavorites/${movieId}`,
    { 
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTQ0NDE3LCJleHAiOjE2MTU5NDU2MTd9.e8yzHs7O3IsDrrAVjnkse_Km06QEaSu7jucUA9F-KCU")
    }).pipe();
  }
}
 // let username = "user";
    // let password = "pwd";
    // let basicAuthenticationHeader = 'Basic ' + btoa(username + ':' + password);
    // return this.http.get<any>('http://localhost:8081/viewFavorites',
    // { headers: new HttpHeaders().set('Authorization',basicAuthenticationHeader)

    // }

    // ).pipe();