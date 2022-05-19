import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/model/user-model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllUser(): Observable<User[]> {
    const url = environment.baseUrl + '/users'
    return this.http.get<User[]>(url);
  }


  public addUser(user: User): Observable<any> {
    const url = environment.baseUrl + '/users'
    return this.http.post(url, user);
  }
}
