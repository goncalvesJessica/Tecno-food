import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  isClosed = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEye() {
    this.isClosed = !this.isClosed;
  }
}
