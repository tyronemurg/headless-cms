import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  post_single_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts'
  post_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts?_embed/'

  // pageinate_url_1 = 'http://localhost/webwarrior/wp-json/wp/v2/posts?page=1&per_page=1'
  // pageinate_url_2 = 'http://localhost/webwarrior/wp-json/wp/v2/posts?page=2&per_page=1'

  custom_post_single_url = 'http://localhost/webwarrior/wp-json/wp/v2/books'
  custom_post_url = 'http://localhost/webwarrior/wp-json/wp/v2/books?_embed/'

  product_single_url = 'http://localhost/webwarrior/wp-json/wc/v3/products'
  base_url = 'http://localhost/webwarrior/wp-json/wc/v3/products?'
  ck = 'ck_your_consumer_key';
  cs = 'cs_your_cosnumer_secret';

  PRODUCT_API_URL = `${this.base_url}consumer_key=${this.ck}&consumer_secret=${this.cs}`;
  constructor() { }
}
