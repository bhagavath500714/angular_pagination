import { Component, OnInit } from '@angular/core';
import * as Constants from '../../../app/common/constant';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  role: string;
  dashboardList: any;
  constructor(private router: Router, public menuService: MenuService) {
    this.menuService.setMenuDisplay(true);
  }

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.setRole();
  }


  setRole() {
    const role = localStorage.getItem('role');
    if (role == Constants.ADMIN_ROLE) {
      this.role = 'Admin';
    } else if (role == Constants.COORDINATOR_ROLE) {
      this.role = 'Coordinator';
    } else if (role == Constants.PATIENT_ROLE) {
      this.role = 'Patient';
    }

  }

}
