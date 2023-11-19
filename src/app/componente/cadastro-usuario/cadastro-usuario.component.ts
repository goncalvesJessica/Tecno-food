import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  email: string = '';
  celular: string = '';
  cpf: string = '';
  isEmailValid: boolean = true;
  isCelularValid: boolean = true;
  isCpfValid: boolean = true;
  isClosed = false;

  constructor() { }

  toggleEye() {
    this.isClosed = !this.isClosed;
  }

  validarEmail() {
    // Use uma expressão regular para validar o formato do e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.isEmailValid = emailRegex.test(this.email);
  }

  validarCelular() {
    // Use uma expressão regular para validar o formato do número de celular (formato brasileiro)
    const celularRegex = /^\(?\d{2}\)?[-.\s]?\d{5}[-.\s]?\d{4}$/;
    this.isCelularValid = celularRegex.test(this.celular);
  }

  validarCpff() {
    // Use uma função de validação de CPF
    this.isCpfValid = this.validarCpf(this.cpf); // Chamando a função corretamente
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

