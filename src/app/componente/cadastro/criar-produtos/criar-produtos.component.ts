import { Produto } from './../../../Dto/Produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent implements OnInit {

  private readonly api = "https://localhost:7151/produto";

  produto: Produto = new Produto();

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
  }


  upSert() {
    if (!this.produto.id) {
      this.Create();
    }
    else {
      this.Update(this.produto.id);
    }
  }

  Create() {
    const model = JSON.parse(JSON.stringify(this.produto));
    console.log(model)

    this.client.post<Produto>(this.api, model, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      })
    }).subscribe(
      (response) => {

      },
      (e) => {

      });

  }
  Update(id: number) {

    const model = JSON.parse(JSON.stringify(this.produto));
    let url = id ? this.api + "/" + id : this.api;

    this.client.put(url, model, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      })
    }).subscribe(
      (response) => {
        window.location.href = '/produtos';
      },
      (e) => {

      });
  }

}
