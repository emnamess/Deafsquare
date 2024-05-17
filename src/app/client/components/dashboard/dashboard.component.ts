import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Use styleUrls with an 's'
})
export class DashboardComponent {
  isSidebarOpen = false;

  constructor() {
    window.addEventListener('resize', () => {
      this.onResize();
    });
  }

  @HostListener('window:resize')
  onResize() {
    // Reset sidebar state when window is resized
    this.isSidebarOpen = false;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
