import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {
  productos:any;
  msj:boolean;
  pathIm = environment.pathImgs;

  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.api.listarProductos()
    .subscribe((res:any)=>{
     this.productos = res.lista;
      
    });
  }

  eliminarProductos(id:number){
    this.api.EliminarProducto(id)
    .subscribe((res:any)=>{
      this.msj=true;
      this.productos = res.lista
      
    });
  }



}
