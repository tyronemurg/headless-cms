import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import{EnvService} from '../services/env.service';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  //productsUrl = 'http://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx';
  constructor(private http: HttpClient,private env: EnvService) { }


  getListOfProducts (): Observable<any> {
    return this.http.get<any>(this.env.PRODUCT_API_URL);
  }
}
