import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  //  Simple blog post and single (without better featured image plugin)
  post_single_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts'
  post_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts?_embed'

  // Load more & pagination posts testing
  apiUrl = 'http://localhost/webwarrior/wp-json/wp/v2/posts';
  baseUrl = 'http://localhost/webwarrior/wp-json/wp/v2';
  postsUrl = `${this.baseUrl}/posts`;

  //Category
  catApiUrl = 'http://localhost/webwarrior/wp-json/wp/v2';

  // Custom post type and single
  custom_post_single_url = 'http://localhost/webwarrior/wp-json/wp/v2/books'
  custom_post_url = 'http://localhost/webwarrior/wp-json/wp/v2/books?_embed/'

  // Woocommerce products and single with keys
  product_single_url = 'http://localhost/webwarrior/wp-json/wc/v3/products'
  products_base_url = 'http://localhost/webwarrior/wp-json/wc/v3/products?'
  ck = 'ck_your_consumer_key';
  cs = 'cs_your_cosnumer_secret';

  PRODUCT_API_URL = `${this.products_base_url}consumer_key=${this.ck}&consumer_secret=${this.cs}`;

    //Custom Fields
  // customFieldbaseUrl = 'http://localhost/webwarrior/wp-json/wp/v2';
  // customFieldpostsUrl = `${this.customFieldbaseUrl}/posts`;

  //  Simple blog post and single (with featured image plugin)
  // post_single_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts'
  // post_url = 'http://localhost/webwarrior/wp-json/wp/v2/posts?_embed/'

  //Pagination first attempt
  // pageinate_url_1 = 'http://localhost/webwarrior/wp-json/wp/v2/posts?page=1&per_page=1'
  // pageinate_url_2 = 'http://localhost/webwarrior/wp-json/wp/v2/posts?page=2&per_page=1'

  constructor() { }
}
