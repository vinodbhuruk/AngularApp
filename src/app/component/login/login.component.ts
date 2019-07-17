import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }




  validate() {
    // var username;
    //var password;

    var username = (<HTMLInputElement>document.getElementById("username")).value;

    var password = (<HTMLInputElement>document.getElementById("password")).value;

    if (username == "vinod" && password == "vinod123") {
      alert("Login successfully");
      this.router.navigate(["/taketocustomer"]);
       
      return false;
    }
    else {
      alert("Login failed");
    }
  }
} 


