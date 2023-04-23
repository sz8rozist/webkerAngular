import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth/auth.guard';
import { ReservationComponent } from './reservation/reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent , 
  canActivate: [AuthGuard]},
  {path: 'reservation/:taborNev', component: ReservationComponent, canActivate: [AuthGuard]},
  {path: 'editReservation/:id', component: EditReservationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
