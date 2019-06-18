import { HttpLinkModule } from 'apollo-angular-link-http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpLinkModule,
    HttpClientModule,
    ApolloModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, HttpClientModule, HttpModule, HttpLinkModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
