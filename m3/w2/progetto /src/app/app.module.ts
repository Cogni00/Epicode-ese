import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { Route, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ToUpperCasePipe } from './pipe/to-upper-case.pipe';
import { SfondoDirective } from './directives/sfondo.directive';
import { UsersComponent } from './components/users/users.component';
import { DettaglioUsersComponent } from './components/dettaglio-users/dettaglio-users.component';


const ROUTES : Route[] = [
    {
        path: "",
        component: HomePage
    },

    {
        path: "PostAttivi",
        component: PostAttiviComponent
    },

    {
        path: "PostInattivi",
        component: PostInattiviComponent
    },
    {
        path: "Users",
        component: UsersComponent,
           children: [
            {
                path: ":id",
                component: DettaglioUsersComponent
            }
           ]
    }

]

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NavbarComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    CardComponent,
    ToUpperCasePipe,
    SfondoDirective,
    UsersComponent,
    DettaglioUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


