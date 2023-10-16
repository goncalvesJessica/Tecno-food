import { ProdutoComponent } from './componente/cadastro/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';

import { LoginComponent } from './componente/login/login.component';
import { CadastroUsuarioComponent } from './componente/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './componente/home/home.component';
import { SobreComponent } from './componente/sobre/sobre.component';



const routes: Routes = [
  { path: 'produtos', component: CriarProdutosComponent },
  { path: 'listar', component: ListarProdutosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '',component:LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
