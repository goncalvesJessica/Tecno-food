import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class HomeComponent implements OnInit {

  private readonly api = "https://localhost:7151/product";
  produtos: any[] = [];
  produtoId = "";

  constructor(private client: HttpClient) { }

  ngOnInit(): void {

    console.log("init");
    this.GetProdutos();

  }
  GetProdutos() {
    console.log("get");
    this.client.get<any[]>(this.api, {
      headers: new HttpHeaders({
        'Accept': 'aplication/json',
      })
    }).subscribe(
      (response) => {
        this.produtos = response;
        console.log(this.produtos);
      },
      (e) => {

      }
    );
  }



}
