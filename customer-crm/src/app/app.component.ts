import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag name ---> used --> index.html
  templateUrl: './app.component.html',
  // template: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Relationship Mangement (CRM)';

  // message = 'Welcome to  Simplilearn';
}
