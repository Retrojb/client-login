import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, data: { title: 'Welcome to Life Style Management'}
  },
  {
    path: 'login', component: LoginComponent, data: { title: 'Login' }
  },
  {
    path: 'registration', component: RegistrationComponent, data: { title: 'Registration'}
  },
  {
    path: 'aboutUs', component: AboutUsComponent, data: { title: 'About Us'}
  },
  {
    path: 'createUser', component: CreateUserComponent, data: { title: 'Registering?'}
  },
  {
    path: 'editUser', component: UserEditProfileComponent, data: {title: 'Edit Profile'}
  },
  {
    path: 'userProfile', component: UserProfileComponent, data: { title: 'Your profile' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
