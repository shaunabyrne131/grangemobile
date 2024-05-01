import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userType: string;

  constructor(private router: Router) { 
    this.userType = ''; // Initialize userType in the constructor
  }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['home']);
  }
}
