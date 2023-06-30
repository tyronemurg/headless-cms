import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import{WoocommerceService} from '../../services/woocommerce.service';
import{PostsService} from '../../services/posts.service';
import{CustomPostsService} from '../../services/custom-posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  customPosts: any;
  products: any;
  images: any;
  //thumbnail: any;
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer,
    private woocommerceService: WoocommerceService,
    private postsService: PostsService,
    private customPostsService: CustomPostsService,) { }

  ngOnInit(): void {

    this.getListOfPosts();
    this.getListOfProducts();
    this.getListOfCustomPosts();

    //Get Posts from WP REST API (Used In NGinit For Testing -> Moved to its own service)
    // this.http.get('http://localhost/webwarrior/wp-json/wp/v2/posts?_embed/').subscribe((data : any) =>{
    //   //console.log(data);
    //   this.posts = data;
    //   console.log(this.posts);
    // })
 

    // Get Products from WP REST API (Used In NGinit For Testing -> Moved to its own service)
    // this.http.get('http://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx').subscribe((data: any) =>{
    // this.products = data;
    // console.log(this.products);
    //})

        //Get Custom Posts from WP REST API (Used In NGinit For Testing -> Moved to its own service)
    // this.http.get('http://localhost/webwarrior/wp-json/wp/v2/books?_embed/').subscribe((data : any) =>{
    //   //console.log(data);
    //   this.customPosts = data;
    //   console.log(this.customPosts);
    // });

  }

  // Get Post List
  getListOfPosts(): void {
    this.postsService.getListOfPosts()
      .subscribe((data : any) =>{
        //console.log(data);
        this.posts = data;
        console.log(this.posts);
      });
  }
  // Get Product List
  getListOfProducts(): void {
    this.woocommerceService.getListOfProducts()
      .subscribe((data : any) =>{
        //console.log(data);
        this.products = data;
        console.log(this.products);
      });
  }
  // Get Custom Post List
  getListOfCustomPosts(): void {
    this.customPostsService.getListOfCustomPosts()
      .subscribe((data : any) =>{
        //console.log(data);
        this.customPosts = data;
        console.log(this.customPosts);
      });
  }
  

}
