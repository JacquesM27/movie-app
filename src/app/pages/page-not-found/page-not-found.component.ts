import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-page-not-found',
//   templateUrl: './page-not-found.component.html',
//   styleUrls: ['./page-not-found.component.css']
// })
@Component({
  selector: 'app-page-not-found',
  template: '<h1>Page not found :(</h1>'
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
