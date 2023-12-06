import { Login } from './../../Dto/Login';
import { UserLocalStorage } from './../../Dto/UserLocalStorage';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private readonly api = "https://localhost:7151/Login";
  isClosed = false;
  error = false;

  toggleEye() {
    this.isClosed = !this.isClosed;
  }

  login: Login = new Login();
  router: Router;

  constructor(private client: HttpClient, router: Router) {this.router = router;}
  ngOnInit(): void {
  }

  FazerLogin() {
    const model = JSON.parse(JSON.stringify(this.login));
    console.log(model)

    this.client.post<Login>(this.api, model, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    }).subscribe(
      (response) => {
        localStorage.setItem('user', JSON.stringify(response));

        var user = localStorage.getItem('user');
        if (user != null) {
          var x = JSON.parse(user) as UserLocalStorage;
        }

        this.router.navigate(['/home']);
      },
      (e) => {
        this.error = true;
        console.log(e);
      });
  }
}
