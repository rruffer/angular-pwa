import { ListarSeguroComponent } from './components/listar-seguro/listar-seguro.component';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroSeguroComponent, data: {num: 1}},
  {path: 'listar', component: ListarSeguroComponent, data: {num: 2}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
