import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';
import { LoginComponent } from './componente/login/login.component';
import { CadastroUsuarioComponent } from './componente/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './componente/home/home.component';
import { SobreComponent } from './componente/sobre/sobre.component';
import { CarrinhoComponent } from './componente/carrinho/carrinho.component';
import { CapaComponent } from './componente/capa/capa.component';
import { CadastroAdminComponent } from './componente/cadastro-admin/cadastro-admin.component';
import { RecuperarSenhaComponent } from './componente/recuperar-senha/recuperar-senha.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { CabecalhoAdminComponent } from './componente/cabecalho-admin/cabecalho-admin.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listar', component: ListarProdutosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'criar', component: CriarProdutosComponent },
  { path: 'criar/:id', component: CriarProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'admin', component: CadastroAdminComponent },
  { path: 'recuperar', component: RecuperarSenhaComponent },
  { path: '',component:CapaComponent },
  { path: 'capecalho', component: CabecalhoComponent },
  { path: 'capecalhoAdmin', component: CabecalhoAdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
