import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { GLOBAL_URL } from './URL';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    
  categoryUrl = GLOBAL_URL+'Category';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'})
  }

  public createCategory(category:Category) {
    console.log(JSON.stringify(category));
    return this.httpClient.post<Category>(this.categoryUrl, category);
  }

  getCategories(){
    return this.httpClient.get<Category[]>(this.categoryUrl);
  }
}
