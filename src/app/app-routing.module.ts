import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
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
    path: 'about-us', component: AboutUsComponent, data: { title: 'About Us'}
  },
  {
    path: 'create-user', component: CreateUserComponent, data: { title: 'Registering?'}
  },
  {
    path: 'edit-user/:id', component: UserEditProfileComponent, data: {title: 'Edit Profile'}
  },
  {
    path: 'user-profile', component: UserProfileComponent, data: { title: 'Your profile' }
  },
  {
    path: 'admin-user-list', component: AdminUserListComponent, data: { title: 'Your ADMIN' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
