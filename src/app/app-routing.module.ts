import { ListarSeguroComponent } from './components/listar-seguro/listar-seguro.component';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroSeguroComponent},
  {path: 'listar', component: ListarSeguroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
