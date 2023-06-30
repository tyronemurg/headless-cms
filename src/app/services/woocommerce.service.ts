import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {EnvService} from '../services/env.service';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  //productsUrl = 'http://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx';
  constructor(private http: HttpClient,private env: EnvService) { }


  getListOfProducts (): Observable<any> {
    return this.http.get<any>(this.env.PRODUCT_API_URL);
  }

  getSingleProduct(id: any) {
    return this.http.get(this.env.product_single_url + '/' + id + '?consumer_key=' + this.env.ck + '&consumer_secret=' + this.env.cs )
      .pipe(
        tap(products => console.log(products)),
        catchError(this.handleError(`Get Products ID id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
 
}
