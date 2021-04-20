import { Component, OnInit } from '@angular/core';
export class Customer {
  constructor(public id:number, public name:string,public email : string, public phone : string,public birthDay :Date){

  }
}
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
    customers = [
      new Customer(101,'vinodh','vinodh.mahendra@simplilearn.com','98444',new Date()),
      new Customer(102,'kavana','kavana@simplilearn.com','98444',new Date()),
      new Customer(103,'hemavathi','hemavathi@simplilearn.com','89898',new Date()),
      new Customer(104,'bhavya','bhavya@simplilearn.com','54621',new Date())
    ];

  // customers = [
  //   {id:101,name: 'vinodh',email: 'vinodh.mahendra@simplilearn.net',phone:23987},
  //   {id:102,name: 'sanket',email: 'sanket@simplilearn.net',phone:32748},
  //   {id:103,name: 'sameer',email: 'sameer@simplilearn.net',phone:39838},
  //   {id:104,name: 'kavana',email: 'kavana@simplilearn.net',phone:12399}
  // ];
  // customer ={
  //   id: 101,
  //   name: 'vinodh',
  //   email: 'vinodh.mahendra@simplilearn.net',
  //   phone: 2938298
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
