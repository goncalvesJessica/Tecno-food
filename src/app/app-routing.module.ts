import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: CriarProdutosComponent },
  { path: 'listar', component: ListarProdutosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
