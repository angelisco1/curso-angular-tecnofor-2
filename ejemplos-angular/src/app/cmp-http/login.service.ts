import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  guardarToken() {
    localStorage.setItem('auth-token', Math.random().toString().slice(2));
  }

  getToken() {
    return localStorage.getItem('auth-token') ? localStorage.getItem('auth-token') : '-1';
  }


  eliminarToken() {
    localStorage.removeItem('auth-token');
  }
}
