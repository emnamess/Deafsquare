import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deafsquareapp';

  displayHero: boolean = true;
  displayLayout:boolean=true;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update displayHero based on the current route
        this.displayHero = !['/', '/signup', '/signin',].includes(event.url);
        this.displayLayout = !['/signup', '/signin'].includes(event.url);

      }
    });
  }
}
