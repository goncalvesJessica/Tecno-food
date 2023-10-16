import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

@Injectable({
  providedIn:'root',
})

export class ProdutoComponent implements OnInit {

  private readonly api = "https://localhost:7151/produto";
  produto: any[] = [];
  produtoId = "";

  constructor( private client: HttpClient) {}

  ngOnInit(): void {

    this.GetProdutos();
  }

  GetProdutos(){


    this.client.get<any[]>(this.api, {
      headers: new HttpHeaders({
        'Accept': 'aplication/json',
      })

    }).subscribe(
      (response) => {
        this.produto = response;
        console.log(this.produto);
      },
      (e)=> {

      }
      );
  }



Remove (id : number) {
  let url = this.api + "/" + id;
  this.client.delete(url, {
    headers: new HttpHeaders({
      'Accept': 'application/json',
    })

  }).subscribe(
    (response) => {
      this.GetProdutos();
    },
    (e) =>{

    }
    );

  }


}



