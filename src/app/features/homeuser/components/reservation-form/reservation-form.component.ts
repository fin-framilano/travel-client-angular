import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Packet } from 'src/app/shared/model/packet-model';
import { Reservation } from 'src/app/shared/model/reservation-model';

@Component({
  selector: 'fin-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  //Data di partenza attualmente selezione
  startDate: string = '';

  //data di arrivo attualmente selezionata
  endDate: string = '';

  //Numero di persone partecipanti
  nPeople: number = 1;

  //Booleano che triggera il messaggio di errore per campi non corretti
  invalidDates: boolean = false;

  //Pacchetto attualmente selezionato
  currentPacketId: number = 0

  //Utente attualmente loggato
  currentUserId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  //Recupero i dati necessari dall'url per la creazione della prenotazione
  ngOnInit(): void {
    //Recupero i dati dal parent e da me stesso
    this.route.parent?.params.subscribe((p) => {
      this.currentUserId = p['user_id'];
    });
    this.route.params.subscribe((p) => {
      this.currentPacketId = p['packet_id'];
    });
  }

  //Converto da YYYY-MM-DD a DD-MM-YYYY
  private formatDateString(oldDate: string) {
    let anno,
      giorno,
      mese: string = '';
    let oldDateArray = oldDate.split('-');
    anno = oldDateArray[0];
    mese = oldDateArray[1];
    giorno = oldDateArray[2];
    return giorno + '-' + mese + '-' + anno;
  }

  //Creo una nuova prenotazione
  createReservation(reservationForm: NgForm) {
    if (
      reservationForm.value.dataInizio === '' ||
      reservationForm.value.dataFine === ''
    ) {
      this.invalidDates = true;
      return;
    }

    const newReservation: Reservation = {
      id: 0,
      id_user: this.currentUserId,
      id_packet: this.currentPacketId,
      start_date: this.formatDateString(reservationForm.value.dataInizio),
      end_date: this.formatDateString(reservationForm.value.dataFine),
      nr_people: reservationForm.value.numeroPersone,
    };
    this.reservationService.createReservation(newReservation).subscribe(
      () => {
        this.router.navigateByUrl(
          'homeuser/' + this.currentUserId + '/reservations'
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
