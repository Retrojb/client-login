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
import { UserService } from './services/user.service';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutUsComponent,
    NavigationComponent,
    FooterComponent,
    CreateUserComponent,
    UserProfileComponent,
    UserEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
