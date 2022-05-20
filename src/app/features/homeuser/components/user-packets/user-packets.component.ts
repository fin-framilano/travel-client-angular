import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Packet } from 'src/app/shared/model/packet-model';

@Component({
  selector: 'fin-user-packets',
  templateUrl: './user-packets.component.html',
  styleUrls: ['./user-packets.component.css'],
})
export class UserPacketsComponent implements OnInit {
  //Campi da consegnare a list-item per la creazione della lista dei pacchetti disponibili
  availablePacketsList: Packet[] = [];
  availablePacketsListHeaders: string[] = [
    'ID',
    'Nome Pacchetto',
    'Mezzo Trasporto',
    'Città',
    'Costo',
    'Opzioni',
  ];
  availablePacketsKeys: string[] = [
    'id',
    'nomePacchetto',
    'mezzoTrasporto',
    'city',
    'costo',
  ];

  currentUserId: number = 0;

  constructor(
    private packetService: PacketService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //Recupero pacchetti disponibili
    this.packetService.getAllPackets().subscribe(
      (result) => {
        this.availablePacketsList = result;
      },
      (error) => {
        console.log(error);
      }
      );
    }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(
      result => {
        this.currentUserId = result['user_id']
      }
    )
  }

  selectHandler(packet_id: number) {
    console.log('Hai selezionato il pacchetto: ' + packet_id);
    this.router.navigateByUrl('homeuser/' + this.currentUserId + '/packets/' + packet_id)
  }
}
