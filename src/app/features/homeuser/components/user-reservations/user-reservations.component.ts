import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/shared/model/reservation-model';

@Component({
  selector: 'fin-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css'],
})
export class UserReservationsComponent implements OnInit {
  //Campi da consegnare a list-item per la creazione della lista delle prenotazioni dell'utente
  reservationsListHeaders: string[] = [
    'ID',
    'ID Utente',
    'ID Pacchetto',
    'Data Partenza',
    'Data Ritorno',
    'Numero Partecipanti',
    'Opzioni',
  ];
  reservationsKeys: string[] = [
    'id',
    'userId',
    'packetId',
    'startDate',
    'endDate',
    'nrPeople',
  ];

  reservationsList: Reservation[] = [];

  currentUserId: number = 0;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //SERVE SPECIFICARE .parent PERCHE' QUESTA ROUTE NON SA NIENTE DI CIO' CHE C'E' DIETRO DI LUI
    //Scope su /reservations ma non su
    ///:user_id/reservations
    this.route.parent?.params.subscribe((p) => {
      //Questo id è il nome di variable assegnato nei path in product-routing
      this.currentUserId = p['user_id'];
      this.loadReservedPackets();
    });
  }

  private loadReservedPackets() {
    this.reservationService
      .getAllReservationsByUserId(this.currentUserId)
      .subscribe(
        (result) => {
          this.reservationsList = result;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteHandler(reservation_id: number) {
    console.log('Hai eliminato la prenotazione: ' + reservation_id);
    for (let index = 0; index < this.reservationsList.length; index++) {
      const currentReservation = this.reservationsList[index];
      if (currentReservation.id === reservation_id) {
        this.reservationService
          .deleteReservationById(currentReservation.id)
          .subscribe(
            (result) => {
              this.reservationsList = this.reservationsList.filter(
                (el) => el.id !== reservation_id
              );
            },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }
}
