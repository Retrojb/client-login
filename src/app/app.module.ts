import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MortyService } from './services/morty.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutUsComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule
  ],
  providers: [ MortyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
