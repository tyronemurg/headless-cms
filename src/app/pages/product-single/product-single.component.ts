import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {
  id: any;
  products: any;
  images: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {

    let productID = this.route.snapshot.params['id'];

    this.http.get(`https://client-apps.co.za/wordpress/wp-json/wc/v3/products/${productID}?consumer_key=ck_effc4b5fb137d82f712ca6284a1805d466fde6af&consumer_secret=cs_f4c7b2883f65333689b136368cd84131ca6e9b5c`).subscribe((data:any) =>{
   // console.log(data);
    this.products = data;
    //console.log(data);
    
  
  });

  }

}
