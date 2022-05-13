import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserContainerComponent } from './components/home-user-container/home-user-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeUserRoutingModule } from './homeuser-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { UserPacketsComponent } from './components/user-packets/user-packets.component';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeUserContainerComponent,
    UserPacketsComponent,
    UserReservationsComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeUserRoutingModule,
    FormsModule,
    NavbarModule,
    RouterModule
  ]
})
export class HomeuserModule { }
