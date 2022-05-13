import { KeyValue } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VehicleEnum } from '../../enum/vehicle-enum';
import { Packet } from '../../model/packet-model';

@Component({
  selector: 'fin-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input()
  title: string = ""

  @Input()
  listHeader: string[] = []

  @Input()
  listItems: any[] = []

  @Input()
  listKeys: string[] = []

  @Input()
  listOptions: string[] = []

  @Output()
  selectEvent: EventEmitter<number> = new EventEmitter()

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter()

  @Output()
  editEvent: EventEmitter<number> = new EventEmitter()

  constructor() { }
  
  optionHandler(item: any, option: string) {
    if (option === "Seleziona") this.selectEvent.emit(item.id)
    if (option === "Elimina") this.deleteEvent.emit(item.id)
    if (option === "Modifica") this.editEvent.emit(item.id)
  }

  ngOnInit(): void {
  }

}
