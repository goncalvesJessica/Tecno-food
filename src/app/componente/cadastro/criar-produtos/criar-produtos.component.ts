import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent implements OnInit {

  produto = {
    id: '',
    conteudo: '',
    descricao: '',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  criarProduto(){
    alert("Produto criado com sucesso")
  }
}
