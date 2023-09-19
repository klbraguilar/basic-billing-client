import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
  clientForm = new FormGroup({
    searchTerm : new FormControl('',[Validators.required, Validators.minLength(2)])
  });
  columnsToDisplay: string[] = ['id', 'name'];
  client?: Client;
  stylingMode = "underlined";
  clients:Client[] = []
  
  constructor(private router:Router, private clientService:ClientServiceService) { }

  ngOnInit(): void {
    setTimeout(() => validationEngine.validateGroup());
  }

  searchClient(){
    this.clientService.getClient(this.clientForm.value.searchTerm).subscribe(data =>{
      
      console.log(this.clients);
      if(data.length > 0){
        this.clients = data;
      }else{
        notify('No data to display', 'fail');
        this.clients = [];
      }
    })
  }

}
