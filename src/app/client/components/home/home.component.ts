import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formations: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFormations();
  }

  fetchFormations(): void {
    this.http.get<any>('http://localhost:8099/formations').subscribe(
      response => {
        this.formations = response._embedded.formations;
      },
      error => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }
}
