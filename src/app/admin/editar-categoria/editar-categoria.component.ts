import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';
declare var $: any;
@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  categorias:any;
  Form: FormGroup;
  frmGuardar = new FormData();
  datos:any;
  msj:boolean;
  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.api.listarCategorias()
    .subscribe((res:any)=>{
      this.categorias = res.lista
    });
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.Form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  editarcategoria(id){
    this.datos = this.Form.value; 
  
    this.api.EditarCategoria(id,this.datos)
    .subscribe((res:any)=>{
      this.categorias = res.lista;
      window.location.reload();
    });
  }

  

}
