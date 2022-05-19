import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Packet } from 'src/app/shared/model/packet-model';
import { PacketService } from 'src/app/core/services/packet.service';
import { VehicleEnum } from 'src/app/shared/enum/vehicle-enum';

@Component({
  selector: 'fin-list-packet-container',
  templateUrl: './list-packet-container.component.html',
  styleUrls: ['./list-packet-container.component.css'],
})
export class ListPacketContainerComponent implements OnInit {
  //Variabile di controllo field del form
  isNotValid: boolean = false;

  //Parametri per i pacchetti
  packetsList: Packet[] = [];
  listPacketsHeaders: string[] = [
    'ID',
    'Nome Pacchetto',
    'Mezzo Trasporto',
    'Città',
    'Costo',
    'Opzioni',
  ];
  listPacketKeys: string[] = [
    'id',
    'nomePacchetto',
    'mezzoTrasporto',
    'city',
    'costo',
  ];

  vehicleOptions: string[] = []

  insertedId: string = '';
  insertedName: string = '';
  insertedVehicle: string = "Treno";
  insertedCity: string = '';
  insertedCost: number = 0;

  constructor(private router: Router, private packetService: PacketService) {
    //Recupero pacchetti disponibili
    this.packetService.getAllPackets().subscribe(
      (result) => {
        this.packetsList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Popolo la lista dei possibili veicoli utilizzabili all'avvio
  ngOnInit(): void {
    Object.values(VehicleEnum).forEach(vehicle => {
      this.vehicleOptions.push(vehicle)
    });
  }

  packetCreation(packetForm: NgForm) {
    if (
      packetForm.value.campoVeicolo > 4 ||
      packetForm.value.campoNome === '' ||
      packetForm.value.campoCity === '' ||
      packetForm.value.campoCosto === ''
    ) {
      this.isNotValid = true;
      console.log('Error');
      return;
    }

    let packetToSave: Packet = {
      id: 0,
      nomePacchetto: packetForm.value.campoNome,
      mezzoTrasporto: packetForm.value.campoVeicolo,
      city: packetForm.value.campoCity,
      costo: packetForm.value.campoCosto,
    };
    
    this.packetService.createPacket(packetToSave).subscribe(
      result => {
        packetToSave.id = result
        console.log(packetToSave.id)
        this.packetsList.push(packetToSave);
        alert('Pacchetto registrato!');
      },
      error => {
        console.log(error);
      }
    );
  }

  cancellaPacchetto(packet_id: number) {
    this.packetService.deletePacketById(packet_id).subscribe(
      (result) => {
        this.packetsList = this.packetsList.filter((el) => el.id !== packet_id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
