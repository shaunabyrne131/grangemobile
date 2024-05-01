import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Simulate loading and navigate to the login page
    this.loadAndNavigateToLogin();
  }

  loadAndNavigateToLogin() {
    // loading process

    setTimeout(() => {
      // Navigate to the login page
      this.router.navigateByUrl('/login');
    }, 1000); 
  }
}
