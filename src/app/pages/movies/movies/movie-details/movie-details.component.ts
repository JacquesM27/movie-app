import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: Observable<Movie>;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    //console.log('this route');
    //console.log(this.route);
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getMovie(params.get('id')))
      );
  }

  goToMovies() {
    //console.log('this router');
    //console.log(this.router);
    //this.router.navigate(['/movies']);
    this.location.back();
  }
}
