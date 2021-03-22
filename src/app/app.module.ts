import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './favorites/favorites.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FavoritesComponent,
    EditMovieComponent,
    MovieEditComponent,
    AdminMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
