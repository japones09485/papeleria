import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { CrearCategoriaComponent } from './admin/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './admin/editar-categoria/editar-categoria.component';
import { CrearProductoComponent } from './admin/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './admin/editar-producto/editar-producto.component';
import { GestorComponent } from './admin/gestor/gestor.component';
import {HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'gestorAdmin', component: GestorComponent },
  { path: 'crearCat', component: CrearCategoriaComponent },
  { path: 'editcatCat', component: EditarCategoriaComponent },
  { path: 'crearProd', component: CrearProductoComponent },
  { path: 'editProd/:id', component: EditarProductoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }