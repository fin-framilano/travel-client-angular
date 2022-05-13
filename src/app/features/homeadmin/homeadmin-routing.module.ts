import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminContainerComponent } from './components/homeadmin-container/homeadmin-container.component';
import { ListPacketContainerComponent } from './components/list-packet-container/list-packet-container.component';
import { ListPrenotazioniContainerComponent } from './components/list-prenotazioni-container/list-prenotazioni-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminContainerComponent,
    children: [
      {
        path: 'reservations',
        component: ListPrenotazioniContainerComponent,
      },
      {
        path: 'packets',
        component: ListPacketContainerComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeAdminRoutingModule {}
