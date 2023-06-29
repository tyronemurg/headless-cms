import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{WoocommerceService} from '../../services/woocommerce.service';

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
    private http: HttpClient,
    private woocommerceService: WoocommerceService) { }

  ngOnInit(): void {

  //   let productID = this.route.snapshot.params['id'];

  //   this.http.get(`http://localhost/webwarrior/wp-json/wc/v3/products/${productID}?consumer_key=xxxx&consumer_secret=xxxx`).subscribe((data:any) =>{
  //  // console.log(data);
  //   this.products = data;
  //   //console.log(data);
    
  
  // });

  this.woocommerceService.getSingleProduct(this.route.snapshot.params['id']).subscribe((data:any) =>{
      
    this.products = data;
    // console.log(this.products);
  });

  }

}
