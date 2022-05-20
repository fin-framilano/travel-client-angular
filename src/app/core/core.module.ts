import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service'
import { PacketService } from './services/packet.service'
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthStoreService } from './services/auth-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers: [ UserService, PacketService, AuthService, AuthInterceptorService, AuthStoreService ]
})
export class CoreModule { }
