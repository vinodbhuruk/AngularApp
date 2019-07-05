import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  handleClick(event: Event) {
    window.open("https://www.google .com");
    console.log("Click!", event);
  }


  title = 'sb';

}
