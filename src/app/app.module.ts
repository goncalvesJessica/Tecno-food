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
import { HttpClientModule } from '@angular/common/http';
import { CarrinhoComponent } from './componente/carrinho/carrinho.component';
import { CapaComponent } from './componente/capa/capa.component';
import { CadastroAdminComponent } from './componente/cadastro-admin/cadastro-admin.component';
import { RecuperarSenhaComponent } from './componente/recuperar-senha/recuperar-senha.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './componente/popup/popup.component';
import { CabecalhoAdminComponent } from './componente/cabecalho-admin/cabecalho-admin.component';

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
    CarrinhoComponent,
    CapaComponent,
    CadastroAdminComponent,
    RecuperarSenhaComponent,
    PopupComponent,
    CabecalhoAdminComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
