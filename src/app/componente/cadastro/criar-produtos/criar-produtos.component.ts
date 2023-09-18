import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent implements OnInit {

  produto = {
    id: '1',
    conteudo: 'café',
    descricao: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }
  criarProduto(){
    alert("Produto criado com sucesso")
  }
}
