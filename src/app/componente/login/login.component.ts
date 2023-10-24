import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isClosed = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleEye() {
    this.isClosed = !this.isClosed;
  }
}
