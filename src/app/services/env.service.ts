import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  post_single_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts'
  post_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts?_embed/'

  product_single_url = 'http://localhost/webwarrior/wp-json/wc/v3/products'
  base_url = 'http://localhost/webwarrior/wp-json/wc/v3/products?'
  ck = 'ck_your_consumer_key';
  cs = 'cs_your_cosnumer_secret';

  PRODUCT_API_URL = `${this.base_url}consumer_key=${this.ck}&consumer_secret=${this.cs}`;
  constructor() { }
}
