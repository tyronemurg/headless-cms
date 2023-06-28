import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import{WoocommerceService} from '../../services/woocommerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  products: any;
  images: any;
  //thumbnail: any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer,private woocommerceService: WoocommerceService) { }

  ngOnInit(): void {
    //Get Posts from WP REST API
    this.http.get('http://localhost/webwarrior/wp-json/wp/v2/posts?_embed/').subscribe((data : any) =>{
      //console.log(data);
      this.posts = data;
      console.log(this.posts);
    })

    this.getListOfProducts();

    // Get Products from WP REST API (For Testing -> Moved to its own service)
    // this.http.get('http://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx').subscribe((data: any) =>{
    // this.products = data;
    // console.log(this.products);
    //})

  }

  getListOfProducts(): void {
    this.woocommerceService.getListOfProducts()
      .subscribe((data : any) =>{
        //console.log(data);
        this.products = data;
        console.log(this.products);
      });
  }

}
