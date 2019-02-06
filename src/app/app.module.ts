import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';


import { AppComponent } from './app.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { TableComponent } from './components/table/table.component';


import { AuthenticationService } from './services/authentication.service';
import { MenuService } from './services/menu.service';
import { DynaminService } from './services/dynamin.service';



const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DasboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'exercise',
    component: ExerciseComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes,  { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    LoginComponent,
    HeaderComponent,
    FormComponent,
    ExerciseComponent,
    TableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MaterialModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [
    AuthenticationService,
    MenuService,
    DynaminService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
