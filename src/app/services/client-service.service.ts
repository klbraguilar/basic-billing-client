import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  
  constructor(private httpClient: HttpClient) { }
  clientUrl = 'http://localhost:5142/api/Client';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'})
  }

  public createClient(client:Client) {
    console.log(JSON.stringify(client));
    return this.httpClient.post<Client>(this.clientUrl, client);
  }
  
  public getClient(searchTerm: string) {
 
    let queryParams = new HttpParams();
    queryParams = queryParams.append("searchTerm",searchTerm);
 
    return this.httpClient.get<Client[]>(this.clientUrl,{params:queryParams});
}
  
}
