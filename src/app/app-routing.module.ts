import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/categories/movies-in-category/movies-in-category.component';
import { MovieDetailsComponent } from './pages/movies/movies/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:category', component: MoviesInCategoryComponent},
  {path: '**', component: PageNotFoundComponent}//ta ścieżka powinna być na końcu, kolejność wczytywania od góry!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
