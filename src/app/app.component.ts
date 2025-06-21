import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';
  counter: number = 0

  increamentCounter() {
    this.counter++
  }

  resetCounter() {
    this.counter = 0
  }

  decreamentCounter() {
    this.counter--
  }

  increamentCounterByValue(number: number) {
    this.counter = this.counter + number
  }

}
