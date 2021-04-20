import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occured Contact Support at ***www.simplilearn.com/help***';

  constructor() { }

  ngOnInit(): void {
  }

}
