import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  pathIm = environment.pathImgs;
  Form: FormGroup;
  frmGuardar = new FormData();
  categorias:any;
  producto:any;
  msj:boolean;
  datos:any; 
  id_prod:number;
  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private acRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.api.listarCategorias()
    .subscribe((res:any)=>{
      this.categorias = res.lista
    });

    this.acRouter.params.subscribe(param => {
      this.api.TraerProdId(param.id)
      .subscribe((res:any)=>{
        this.producto = res.producto;
        this.popularForm();
      });
    });
    this.initForm();
  }

  initForm(){
    this.Form = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });
  }

  popularForm() {
    this.Form.patchValue({
      nombre: this.producto.pro_nombre,
      descripcion: this.producto.pro_descripcion,
      categoria: this.producto.pro_fk_categoria,
      estado: this.producto.pro_estado,
    });
  }


  

  editProd(id:number){
    const payload = {
      id_edit: id,
      data: this.Form.value
    };
    this.frmGuardar.append('data', JSON.stringify(payload));
    this.api.EditarProducto( this.frmGuardar)
      .subscribe((res:any)=>{
        if(res.sucess){
          this.producto = res.producto;
          this.msj = true;

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
