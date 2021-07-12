import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  Form: FormGroup;
  frmGuardar = new FormData();
  categorias:any;
  msj:boolean;
  datos:any;
  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
    this.api.traerCategorias(1)
    .subscribe((res:any)=>{
      this.categorias = res.data;
    });
  }

  initForm(){
  
    this.Form = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });
  }

  guardarProd(){
    this.datos = this.Form.value; 
    this.frmGuardar.append('data', JSON.stringify(this.datos));
    this.api.CrearProducto(this.frmGuardar)
    .subscribe((res:any)=>{
       if(res.sucess == true){
        this.msj = true;
        this.initForm();
       }
    });
  }

  agregarArchivo(ev: any, numFile: number) {
    const imgs: any = ev.target;
   
    if (imgs.files.length > 0) {
      this.frmGuardar.append(`${numFile}`, imgs.files[0]);
    }
  }
}
