import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  
  frmContact: FormGroup;
  mensaje:string;
  sendmail:boolean;
  
  exito:boolean = false;
  constructor( private service: ApiRestService,
               private router: Router,
               private fb: FormBuilder,
               
               ) {
      this.crearFormulario();
   }

  ngOnInit(): void {
  }

  get emailNoValido() {
    return this.frmContact.get('correo').invalid && this.frmContact.get('correo').touched;
  }

  


   crearFormulario() {
      this.frmContact = this.fb.group({
        nombre:['', Validators.required],
        apellidos:['',Validators.required],
        telefono:['',Validators.required],
        correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        mensaje:['', Validators.required ]

      });
   }

   inicializarForm() {
    this.frmContact = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

   guardar(){
   
    this.service.sendContact(this.frmContact.value)
    .subscribe((data:any)=>{
    if(data.ok == true){
      this.sendmail = true;
      this.inicializarForm();
    }
    });
   }

}
