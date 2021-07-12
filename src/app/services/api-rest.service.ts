import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private urlAPI = environment.apiURL;
  constructor( private http: HttpClient ) { }

  login(payload:any){
    return this.http.post(this.urlAPI + `Auth/login`, payload );
  }

  guardarcategoria(payload:any){
    return this.http.post(this.urlAPI + `Auth/guardarcategoria`, payload );
  }

  traerCategorias(estado:number){
    return this.http.post(this.urlAPI + `Auth/traerCategorias`, estado );
  }

 

  listarProductos(pagina?:number){
    return this.http.post(this.urlAPI + `Auth/listarProductos`,pagina);
  }

  listarProductosAc(pagina?:number){
    if(pagina === undefined){
      pagina = 1
    }
    return this.http.get(this.urlAPI + `Auth/listarProductosAc?pagina=${pagina}`);
  }

  listarCategorias(pagina?:number){
    return this.http.post(this.urlAPI + `Auth/listarCategorias`,pagina);
  }

  listarCategoriasAc(pagina?:number){
    return this.http.post(this.urlAPI + `Auth/listarCategoriasAc`,pagina);
  }
  EliminarProducto(id:number){
    return this.http.post(this.urlAPI + `Auth/EliminarProducto`,id);
  }

  EditarCategoria(id:number,datos:any){
    return this.http.post(this.urlAPI + `Auth/EditarCategoria`,{id,datos});
  }

  TraerProdId(id:number){
    return this.http.post(this.urlAPI + `Auth/TraerProdId`,id);
  }

  CrearProducto(payload: any){
    return this.http.post(this.urlAPI + `Auth/crear_producto`, payload );
  }

  EditarProducto(payload:any){
    return this.http.post(this.urlAPI + `Auth/EditarProducto`,payload);
  }

  buscarProductos(filtros: any){
    let strGET = '?';
    strGET += filtros.nameSearch.length > 0 ? `nombre=${filtros.nameSearch}` : '';
    return this.http.get(this.urlAPI + `Auth/filtrar${strGET}`);
  }

  sendContact(payload: any){
    return this.http.post(this.urlAPI + `Auth/EnviarEmail`,payload);
  }

}
