import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client-comp/client/client.component';
import { CategoryComponent } from './components/category-comp/category/category.component';
import { CategoryListComponent } from './components/category-comp/category-list/category-list.component';
import { ClientSearchComponent } from './components/client-comp/client-search/client-search.component';


const routes: Routes = [
  {path: '',   redirectTo: 'add', pathMatch: 'full'},
  //{path: 'lista', component:ListaDoctorComponent},
  {path: 'add', component:ClientComponent},
  {path: 'search', component:ClientSearchComponent},


  {path: 'addcat', component:CategoryComponent},
  {path: 'listcat', component:CategoryListComponent},
  /*{path: 'agregarpac', component:PacienteAgregarComponent},
  {path: 'editarpac', component:PacienteEditarComponent},

  {path: 'listacon', component:ConsultaListaComponent},
  {path: 'agregarcon', component:ConsultaNuevoComponent},*/
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }