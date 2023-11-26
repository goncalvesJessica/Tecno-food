import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class ListarProdutosComponent implements OnInit {

  private readonly api = "https://localhost:7151/Product";
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

  Remove(id: number) {
    let url = this.api + "/" + id;
    this.client.delete(url, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })

    }).subscribe(
      (response) => {
        this.GetProdutos();
      },
      (e) => {
        console.log(e.message);

      }
    );

  }
}
