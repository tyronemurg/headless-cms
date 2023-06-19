import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Get Posts from WP REST API
    this.http.get('http://localhost/wordpress/wp-json/wp/v2/posts?_embed/').subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
    })

    // Get Products from WP REST API
    this.http.get('http://localhost/wordpress/wp-json/wc/v3/products?consumer_key=put_your_consumer_key_here&consumer_secret=put_your_consumer_secret_here').subscribe(data =>{
      this.products = data;
      console.log(this.products);
    })

  }

}
