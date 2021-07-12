import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  Form: FormGroup;
  frmGuardar = new FormData();
  msj : boolean;
  datos:any;
  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }

  
  initForm(){
    this.Form = this.fb.group({
      name: ['', [Validators.required]],
      descrip: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });
  }

  guardarcategoria(){
    this.datos = this.Form.value; 
    this.api.guardarcategoria(this.datos)
    .subscribe((res:any)=>{
      if(res.sucess == true){
        this.msj = true;
        this.initForm();
      }
    });
  }

}
