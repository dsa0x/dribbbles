import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantLandingComponent } from './restaurant-landing/restaurant-landing.component';
import { RoutePlannerComponent } from './route-planner/route-planner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [RestaurantLandingComponent, RoutePlannerComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class RestaurantLandingModule {}
