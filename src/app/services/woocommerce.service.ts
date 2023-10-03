import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {EnvService} from '../services/env.service';


@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  //productsUrl = 'http://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx';
  constructor(private http: HttpClient,private env: EnvService) { }

// Get WC Product List
  getListOfProducts (): Observable<any> {
    return this.http.get<any>(this.env.PRODUCT_API_URL);
  }

  // Get Single Product
  getSingleProduct(id: any) {
    return this.http.get(this.env.product_single_url + '/' + id + '?consumer_key=' + this.env.ck + '&consumer_secret=' + this.env.cs )
      .pipe(
        tap(products => console.log(products)),
        catchError(this.handleError(`Get Products ID id=${id}`))
      );
  }

  // Function to add a product to the cart
  addToCart(productId: number, quantity: number) {
    const url = `${this.env.wc_products_base_url}cart/add`;
    const data = {
      product_id: productId,
      quantity: quantity
    };

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.env.ck + ':' + this.env.cs)
    });

    return this.http.post(url, data, { headers });
  }

   // Function to initiate checkout with PayFast
   initiatePayFastCheckout(orderId: number, amount: number) {
    const url = 'https://sandbox.payfast.co.za/eng/process';
    const returnUrl = 'https://your-redirect-url.com/success'; // Specify your success redirect URL
    const cancelUrl = 'https://your-redirect-url.com/cancel';   // Specify your cancel redirect URL

    const data = {
      merchant_id: 'your_merchant_id',
      merchant_key: 'your_merchant_key',
      return_url: returnUrl,
      cancel_url: cancelUrl,
      notify_url: 'https://your-notify-url.com',
      name_first: 'John',
      name_last: 'Doe',
      email_address: 'john.doe@example.com',
      m_payment_id: orderId.toString(),
      amount: amount.toFixed(2),
      item_name: 'Product Purchase',
    };

    return this.http.post(url, data);
  }

  // Error handle
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
 
}
