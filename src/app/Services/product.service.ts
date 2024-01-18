import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl=environment.baseUrl+'/api/Product';
  add(data:Product){
    let formData=new FormData();
    formData.append("productName",data.productName);
    formData.append("imageFile",data.imageFile??"");
    return this.http.post<Status>(this.baseUrl+'/add',formData);
  }
  getAll(){
    return this.http.get<Product[]>(this.baseUrl+'/getall')
  }

  constructor(private http:HttpClient) { }
}
