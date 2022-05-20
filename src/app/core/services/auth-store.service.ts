import { Injectable } from '@angular/core';
import { SessionUser } from 'src/app/shared/model/session-user-model';


@Injectable()
export class AuthStoreService {

    public init(mail: string, token: string) {
        const sessionUser: SessionUser = {mail, token}
        this.storeUser(sessionUser);
    }

    public storeUser(sessionUser: SessionUser) {
        localStorage.clear();
        localStorage.setItem('currentUser', JSON.stringify(sessionUser))
    }

    public loadUserFromLocalStorage(): SessionUser {
        const user = localStorage.getItem('currentUser')
        if (user) {
            return JSON.parse(user);
        }
        else {
            return {} as SessionUser
        }
    }

    public isLoggedUser(): boolean {
        const user: SessionUser = this.loadUserFromLocalStorage()
        return !!(user && user.token)
    }

    public removeUser() {
        localStorage.clear()
    }
}
