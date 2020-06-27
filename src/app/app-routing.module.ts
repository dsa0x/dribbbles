import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantLandingComponent } from './restaurant-landing/restaurant-landing/restaurant-landing.component';

const routes: Routes = [{ path: '', component: RestaurantLandingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
