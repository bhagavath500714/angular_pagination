import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppComponent } from 'src/app/app.component';
import * as Constants from '../../common/constant';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authenticationService: AuthenticationService, public appComponent: AppComponent, public menuService: MenuService) { 
    this.menuService.setMenuDisplay(false);
  }
  userLandingPage: any;
  person: any = {};
  isValidUser: boolean = true;
  role: any;
  admin: any;
  coordinator: any;
  patient: any;
  blnDisplayMenu: any;

  ngOnInit() {
  }

  public login() {
    this.menuService.setMenuDisplay(false);
    this.userLandingPage = this.authenticationService.login(this.person.username, this.person.password);
    console.log(this.userLandingPage);
    if (null != this.userLandingPage && '' != this.userLandingPage) {
      this.menuService.setMenuConfig(localStorage.getItem('role'));
      this.router.navigate([this.userLandingPage]);
    } else {
      this.isValidUser = false;
      console.log("Invalid User");
    }

  }  

}
