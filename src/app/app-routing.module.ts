import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:"Movies",component:MovieComponent},
  {path:"Favorites",component:FavoritesComponent},
  {path:"editMovie",component:EditMovieComponent},
  {path:"AdminMovies",component:AdminMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
