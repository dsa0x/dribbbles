import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import {
  SCALE_ANIMATION,
  DOWN_ANIMATION,
} from './restaurant-landing.animation';

@Component({
  selector: 'app-restaurant-landing',
  templateUrl: './restaurant-landing.component.html',
  styleUrls: ['./restaurant-landing.component.scss'],
  animations: [SCALE_ANIMATION, DOWN_ANIMATION],
})
export class RestaurantLandingComponent implements OnInit {
  location = false;
  cities = ['Lagos', 'London', 'Luanda', 'Lome'];
  city = '';
  matchedCities = [];
  @ViewChild('locationInput') locationInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onInputChange(value) {
    this.matchedCities = this.cities.filter((citi) => {
      if (!value.length) {
        return;
      }
      return citi.toLowerCase().startsWith(value.toLowerCase());
    });
  }
}
