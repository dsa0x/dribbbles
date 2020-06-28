import { Component, OnInit } from '@angular/core';
import { SCALE_ANIMATION } from './restaurant-landing.animation';

@Component({
  selector: 'app-restaurant-landing',
  templateUrl: './restaurant-landing.component.html',
  styleUrls: ['./restaurant-landing.component.scss'],
  animations: [SCALE_ANIMATION],
})
export class RestaurantLandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
