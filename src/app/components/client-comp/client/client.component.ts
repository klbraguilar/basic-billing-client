import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.minLength(10)])
  });
  stylingMode = "underlined";
  client?: Client;
  constructor(private router:Router, private clientService:ClientServiceService) { }

  ngOnInit(): void {
    setTimeout(() => validationEngine.validateGroup());
  }

  async AddClient(){
    this.client = new Client(
      this.clientForm.value.name
    );
    console.log(this.client)
    this.clientService.createClient(this.client).subscribe(data =>{
      notify('Agregado correctamente.', 'success');
      console.log(data);
      this.router.navigate(["search"]);
    })
  }

}
