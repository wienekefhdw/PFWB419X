import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  firstname = 'Matthis';

  increment(){
    this.counter++;
  }

  decrement(){
    if(this.counter>0){
      this.counter--;
    }
  }
}
