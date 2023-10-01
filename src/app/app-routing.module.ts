import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';

import { LoginComponent } from './componente/login/login.component';
import { CadastroUsuarioComponent } from './componente/cadastro-usuario/cadastro-usuario.component';



const routes: Routes = [
  { path: '',component:LoginComponent },
  { path: 'produtos', component: CriarProdutosComponent },
  { path: 'listar', component: ListarProdutosComponent },

  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
