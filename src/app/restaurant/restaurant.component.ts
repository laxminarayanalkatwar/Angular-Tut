import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent {
  dataemitter = new EventEmitter();
  constructor() {}

  onclick(data: any): void {
    this.dataemitter.emit(data);
  }
}
