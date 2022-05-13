import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HomeAdminContainerComponent } from './components/homeadmin-container/homeadmin-container.component';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { HomeAdminRoutingModule } from './homeadmin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPrenotazioniContainerComponent } from './components/list-prenotazioni-container/list-prenotazioni-container.component';
import { ListPacketContainerComponent } from './components/list-packet-container/list-packet-container.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeAdminContainerComponent,
    ListPrenotazioniContainerComponent,
    ListPacketContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    HomeAdminRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule,
    NavbarModule
  ]
})
export class HomeadminModule { }
