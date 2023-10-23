import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //   template: <h1>Hola coutner</h1>',
  templateUrl: 'counter.component.html',
})
export class CounterComponent{
  title = 'bases';
  public counter: number = 10;

  increaseBy(cantidad: number): void {
    this.counter += cantidad;
  }
  reset(cantidad: number): void {
    this.counter = cantidad;
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   templateUrl: 'counter.component.html',
// })
// export class CounterComponent {
//   title = 'bases';
// }