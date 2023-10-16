import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent implements OnInit {

  produto = {
    id: '1',
    nome: 'coxinha',
    descricao: 'frango com catupily',
    modelo: '2',
    valor:'2.50',
    quantidade:'2'
  }

  constructor() { }

  ngOnInit(): void {
  }
  criarProduto(){
    alert("Produto criado com sucesso")
  }
}
