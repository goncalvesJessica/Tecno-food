import { Component } from '@angular/core';
import { Usuario } from './../../Dto/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  private readonly api = "https://localhost:7151/User";
  usuario: Usuario = new Usuario();

  isEmailValid: boolean = true;
  isCelularValid: boolean = true;
  isCpfValid: boolean = true;
  isClosed = false;
  router: Router;

  constructor(private client: HttpClient, router: Router) {this.router = router;}

  Cadastrar(){
    console.log("aqui")
    this.usuario.role = "aluno";

    const model = JSON.parse(JSON.stringify(this.usuario));
    console.log(model)

    this.client.post<Usuario>(this.api, model, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    }).subscribe(
      (response) => {
        this.router.navigate(['/listar']);
      },
      (e) => {
        console.log(e);
      });
  }

  toggleEye() {
    this.isClosed = !this.isClosed;
  }

  validarEmail() {
    // Use uma expressão regular para validar o formato do e-mail
    if (this.usuario.email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.isEmailValid = emailRegex.test(this.usuario.email);
    }
  }

  validarCelular() {
    // Use uma expressão regular para validar o formato do número de celular (formato brasileiro)
    if (this.usuario.telephone) {
      const celularRegex = /^\(?\d{2}\)?[-.\s]?\d{5}[-.\s]?\d{4}$/;
      this.isCelularValid = celularRegex.test(this.usuario.telephone.toString());
    }
  }

  validarCpff() {
    if (this.usuario.cpf) {
      this.isCpfValid = this.validarCpf(this.usuario.cpf); // Chamando a função corretamente
    }
  }

  private validarCpf(cpf: string): boolean {
    // Remove caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return false; // O CPF deve ter 11 dígitos
    }

    // Verifique dígitos repetidos (111.111.111-11, etc.)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    // Validação dos dígitos verificadores
    let soma = 0;
    let resto: number;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true; // O CPF é válido
  }


}

