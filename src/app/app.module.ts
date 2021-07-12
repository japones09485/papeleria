import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CuracionesComponent } from './components/curaciones/curaciones.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ApiRestService } from './services/api-rest.service';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { GestorComponent } from './admin/gestor/gestor.component';
import { CrearCategoriaComponent } from './admin/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './admin/editar-categoria/editar-categoria.component';
import { EditarProductoComponent } from './admin/editar-producto/editar-producto.component';
import { CrearProductoComponent } from './admin/crear-producto/crear-producto.component';
import { MenuComponent } from './admin/menu/menu.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    CuracionesComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    AdminComponent,
    HomeComponent,
    GestorComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    EditarProductoComponent,
    CrearProductoComponent,
    MenuComponent,
    TiendaComponent,
    PaginacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
