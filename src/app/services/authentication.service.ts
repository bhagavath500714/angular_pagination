import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  login(username: string, password: string): string {
    console.log(username);
    console.log(password);
    if(username == 'admin.com' && password == 'admin') {
        localStorage.setItem("role", "1");
        return 'dashboard';
    } else if(username == 'coordinator.com' && password == 'coordinator') {
       localStorage.setItem("role", "2");
       return 'dashboard';
    } else if(username == 'patient.com' && password == 'patient') {
       localStorage.setItem("role", "3");
       return 'dashboard';
    } else {
        return '';
    }   
    
}

}
