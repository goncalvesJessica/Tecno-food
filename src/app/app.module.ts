import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { FormsModule } from '@angular/forms';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';
import { BodyComponent } from './componente/body/body.component';
import { LoginComponent } from './componente/login/login.component';
import { CadastroUsuarioComponent } from './componente/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './componente/home/home.component';
import { SobreComponent } from './componente/sobre/sobre.component';
import { ProdutoComponent } from './componente/cadastro/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

    CabecalhoComponent,
    RodapeComponent,
    CriarProdutosComponent,
    ListarProdutosComponent,
    BodyComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    HomeComponent,
    SobreComponent,
    ProdutoComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
