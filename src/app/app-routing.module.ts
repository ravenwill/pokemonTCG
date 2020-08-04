import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule) }, 
      { path: 'listar', loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule) }, 
      { path: 'detalhe/:id', loadChildren: () => import('./pages/detalhe/detalhe.module').then(m => m.DetalheModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
