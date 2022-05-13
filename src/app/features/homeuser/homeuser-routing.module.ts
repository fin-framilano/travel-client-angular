import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserContainerComponent } from './components/home-user-container/home-user-container.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { UserPacketsComponent } from './components/user-packets/user-packets.component';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';

//Modulo per specificare quali componenti mostrare al caricamento di /product

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login/signin',
    pathMatch: 'full',
  },
  {
    path: ':user_id',
    component: HomeUserContainerComponent,
    children: [
      {
        path: 'reservations',
        component: UserReservationsComponent,
      },
      {
        path: 'packets',
        component: UserPacketsComponent,
      },
      {
        path: 'packets/:packet_id',
        component: ReservationFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeUserRoutingModule {}
