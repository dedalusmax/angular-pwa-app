import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  estimate;
  percentage;

  constructor() {
    // window.navigator.storage.estimate().then(function (estimate) {
    //   this.estimate = estimate;
    //   this.percentage = (estimate.usage / estimate.quota).toFixed(2);
    // });
  }
}
