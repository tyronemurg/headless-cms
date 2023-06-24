import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //Get Posts from WP REST API
    this.http.get('http://localhost/webwarrior/wp-json/wp/v2/posts?_embed/').subscribe((data : any) =>{
      //console.log(data);
      this.posts = data;
      console.log(this.posts);
    })

    // Get Products from WP REST API
    this.http.get('https://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx').subscribe((data: any) =>{
    //console.log(data);  
    this.products = data;
    console.log(this.products);
     // let objectURL = 'data:image/jpeg;base64,' + this.products.images['src'];
      //console.log(objectURL);
      //this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      //alert(JSON.stringify(this.products.images.src));
    
    })

  }

}
