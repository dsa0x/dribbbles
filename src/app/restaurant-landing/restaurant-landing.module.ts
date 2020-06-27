import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantLandingComponent } from './restaurant-landing/restaurant-landing.component';
import { RoutePlannerComponent } from './route-planner/route-planner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RestaurantLandingComponent, RoutePlannerComponent],
  imports: [CommonModule, SharedModule],
})
export class RestaurantLandingModule {}
