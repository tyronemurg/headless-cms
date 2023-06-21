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
    this.http.get('http://your_wordpress_url/wp-json/wp/v2/posts?_embed/').subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
    })

    // Get Products from WP REST API
    this.http.get('http://your_wordpress_url/wp-json/wc/v3/products?consumer_key=ck_0b013877e8780fc3e62bc75ad938b804c60c02ad&consumer_secret=cs_8bf360c3abc070ae6b32316cd73cd5ec7016ff87').subscribe((data: any) =>{
    console.log(data);  
    this.products = data;
    console.log(this.products);
     // let objectURL = 'data:image/jpeg;base64,' + this.products.images['src'];
      //console.log(objectURL);
      //this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      //alert(JSON.stringify(this.products.images.src));
    
    })

  }

}
