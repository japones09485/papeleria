import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Form: FormGroup;
  frmGuardar = new FormData();
  datos:any;
  error : boolean;
  constructor(  private api: ApiRestService,
                private fb: FormBuilder,
                private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.Form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    this.datos = this.Form.value; 
    this.api.login(this.datos)
    .subscribe((res:any)=>{
      if(res.sucess==true){
        this.router.navigate(['gestorAdmin']);
      }else{
        this.error=false;
      }
      
    })
  }

}
