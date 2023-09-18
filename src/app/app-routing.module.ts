import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutosComponent } from './componente/cadastro/criar-produtos/criar-produtos.component';
import { ListarProdutosComponent } from './componente/cadastro/listar-produtos/listar-produtos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    // /pathMatch e uma propriedade para ultilizar quando não tem caminho, o mais recomendado para usar e o full pois le toda url /
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
    path:'criarProduto',
    component:CriarProdutosComponent
  },
  {
    path:'listarProduto',
    component:ListarProdutosComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
