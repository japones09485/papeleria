import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos:any;
  pathIm = environment.pathImgs;
  cantPaginas:number;
  filts = {
    nameSearch: ''
  };

  
  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.api.listarProductosAc()
    .subscribe((res:any)=>{
      this.productos = res.lista;
      this.cantPaginas = res.cant_pag;
      
    });
  }
  buscarProducto(){
    this.api.buscarProductos(this.filts)
    .subscribe((res: any) => {  
        this.productos = res.lista; 
        this.cantPaginas = res.cant_pag;
    });
  }

  sigPag(pagina:number){
    
    this.api.listarProductosAc(pagina)
    .subscribe((res:any)=>{
      this.productos = res.lista;
    });
  }
}
