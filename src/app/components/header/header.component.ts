import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    console.log('inside logout');
    localStorage.setItem('role','');
    localStorage.setItem('session','false');
    //this.router.navigate(['']);
    window.location.href="/login";

  }

  public doLogout = function() {
    localStorage.setItem('role',null);
    localStorage.setItem('session','false');
    localStorage.clear();
    window.location.href = "/login";
  };

}
