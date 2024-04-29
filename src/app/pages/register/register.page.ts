import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userType: string;

  constructor() {
    this.userType = ''; // Initialize userType in the constructor
  }

  ngOnInit() {
  }
}
