import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service'
import { PacketService } from './services/packet.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers: [ UserService, PacketService ]
})
export class CoreModule { }
