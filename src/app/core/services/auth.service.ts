import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user-model';
import { environment } from 'src/environments/environment';
import { AuthStoreService } from './auth-store.service';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private authStoreService: AuthStoreService
  ) { }


  public login(mail: string, password: string): Observable<User> {
    const url = environment.baseUrl + '/security'
    return this.http.post<User>(url, {"mail": mail, "password": password})
  }

  public logout() {
    this.authStoreService.removeUser();
  }

}
