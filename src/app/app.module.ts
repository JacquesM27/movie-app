import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/categories/movies-in-category/movies-in-category.component';
import { MoviesComponent } from './pages/movies/movies/movies.component';
import { MovieDetailsComponent } from './pages/movies/movies/movie-details/movie-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { YearsComponent } from './pages/years/years/years.component';
import { MoviesInYearComponent } from './pages/years/movies-in-year/movies-in-year.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MoviesInCategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    MovieCoverComponent,
    YearsComponent,
    MoviesInYearComponent
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
