import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SessionUser } from "src/app/shared/model/session-user-model";
import { AuthStoreService } from "./auth-store.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    

    constructor(
        private authStore: AuthStoreService
    ) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const user: SessionUser = this.authStore.loadUserFromLocalStorage();
        if (user) {
            const jwt = user.token;
            const header =  `Bearer ${jwt}`

            req = req.clone({
                setHeaders: {
                    Authorization: header
                }
            });
        }

        return next.handle(req);

    }
}