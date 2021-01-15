import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginServ: LoginService) { }

  intercept(req, next) {
    const token = this.loginServ.getToken();
    const newReq = req.clone({ headers: req.headers.set('Authorization', token) })

    return next.handle(newReq);
  }

}
