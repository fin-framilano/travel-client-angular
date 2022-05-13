import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'login/signin', pathMatch: 'full'
  },

  {
    path: 'login', loadChildren: () => import('./features/sign/sign.module')
      .then(m => m.SignModule)
  }

  ,
  {
    path: 'homeuser', loadChildren: () => import('./features/homeuser/homeuser.module')
      .then(m => m.HomeuserModule)
  },

  {
    path: 'homeadmin', loadChildren: () => import('./features/homeadmin/homeadmin.module')
      .then(m => m.HomeadminModule)
  },
  


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
