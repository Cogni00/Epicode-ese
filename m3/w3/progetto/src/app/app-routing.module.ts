import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { RegisterComponent } from './components/register/register.component';
import { FilmComponent } from './components/film/film.component';


const routes: Routes = [

  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path:"home",
    component: HomeComponent,
    canActivate : [AuthGuard],
    children: [
      {
        path: "profilo",
        component: ProfiloComponent
      },
      {
        path: "film",
        component: FilmComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
