import { Company, Query } from './../types';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from './../auth/auth.service';

import gql from 'graphql-tag';
const GET_COMPANIES = gql`
{
  companies{
    id
    name
    description
    jobs{
      id
      title
      description
    }
  }
}
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[]
  constructor(public auth: AuthService, private apollo: Apollo) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      console.log(this.auth)
      // this.apollo.query<Query>({
      //   query: GET_COMPANIES
      // }).subscribe(val => this.companies = val.data.companies)
    }
  }
}
