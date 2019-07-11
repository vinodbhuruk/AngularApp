import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


  constructor(
    private location:Location
  ){  }

  ngOnInit() {
  }

  goBack():void{
    this.location.back();
  }

}
