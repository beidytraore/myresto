import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { PatiserieComponent } from './components/patiserie/patiserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { TitreComponent } from './components/titre/titre.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';
import { ShowallComponent } from './components/showall/showall.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {path :"",component:ShowallComponent},
  {path :"patisserie",component:PatiserieComponent},
  {path :"salade",component:SaladeComponent},
  {path :"cuisine",component:CuisineComponent},
  {path :"register",component:RegisterComponent},
  {path :"login",component:LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuisineComponent,
    PatiserieComponent,
    SaladeComponent,
    TitreComponent,
    LoginComponent,
    RegisterComponent,
    ShowallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
