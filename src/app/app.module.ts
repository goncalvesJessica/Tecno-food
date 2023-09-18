import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { FormsModule } from '@angular/forms';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarProdutosComponent,
    ListarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
