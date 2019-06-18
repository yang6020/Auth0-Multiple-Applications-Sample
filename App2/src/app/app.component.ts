import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService, apollo: Apollo, private httpLink: HttpLink) {
    auth.handleAuthentication();
    apollo.create({
      link: this.httpLink.create({ uri: 'http://localhost:3001/graphql' }),
      cache: new InMemoryCache()
    });
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }

}
