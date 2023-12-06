import { Produto } from './../../../Dto/Produto';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent implements OnInit {
  private readonly api = "https://localhost:7151/Product";

  produto: Produto = new Produto();

  constructor(private client: HttpClient, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.InitPage();
  }

  InitPage(){
    let id = this.activeRoute.snapshot.paramMap.get("id")
    if(id)
    {
      this.GetProduto(id)
    }
  }

  GetProduto(id: string) {

    let url = id ? this.api + '/' + id : this.api;

    this.client.get<Produto>(url, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }).subscribe(
      (response) => {
        this.produto = response;
        console.log(this.produto);
      },
      (e) => {
        console.log(e)
      }
    );

  }

  upSert() {
    console.log(this.produto);
    if (this.produto.id && this.produto.id  > 0) {
      this.Update(this.produto.id);
    }
    else {
      this.Create();
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
        window.location.href = '/listar';
      },
      (e) => {
        console.log(e);
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
        window.location.href = '/listar';
      },
      (e) => {

      });
  }

}
