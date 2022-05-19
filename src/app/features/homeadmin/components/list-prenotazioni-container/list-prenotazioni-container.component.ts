import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/shared/model/reservation-model';


@Component({
  selector: 'fin-list-prenotazioni-container',
  templateUrl: './list-prenotazioni-container.component.html',
  styleUrls: ['./list-prenotazioni-container.component.css']
})


export class ListPrenotazioniContainerComponent implements OnInit {

  //Parametri per le prenotazioni
  ReservationsList: Reservation[] = []
  reservationsListHeaders: string[] =
    ["ID", "ID Utente", "ID Pacchetto", "Data Partenza", "Data Ritorno", "Numero Partecipanti", "Opzioni"]
  reservationsKeys: string[] = [
    'id',
    'userId',
    'packetId',
    'startDate',
    'endDate',
    'nrPeople',
  ];

  constructor(
    private router: Router,

    private reservationService: ReservationService
  ) {
    this.reservationService.getAllReservations().subscribe(
      result => {
        this.ReservationsList = result
      },
      error => {
        console.log(error)
      }
    )
  }

  cancellaPrenotazione(reservation_id: number) {
    this.reservationService.deleteReservationById(reservation_id).subscribe(
      result => {
        this.ReservationsList = this.ReservationsList.filter(el => el.id !== reservation_id)
      },
      error => {
        console.log(error)
      }
    )
  }


  ngOnInit(): void {
  }

}
