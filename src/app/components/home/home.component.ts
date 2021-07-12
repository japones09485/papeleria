import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiRestService } from 'src/app/services/api-rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorias:any;
  constructor(private api: ApiRestService,
    private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void {
    this.api.listarCategoriasAc()
    .subscribe((res:any)=>{
      this.categorias = res.lista;
    });

   
  }
}
