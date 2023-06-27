import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {

  posts: any;
 
  constructor(private http: HttpClient){}
 
  ngOnInit(): void{
    this.http.get('http://localhost/webwarrior/wp-json/wp/v2/posts/?_embed/&categories=34').subscribe(data =>{
      // for(let key in data){
      //   if(data.hasOwnProperty(key)){
      //     this.posts.push(data[key]);
      //   }
      // }
      this.posts = data;
      console.log(this.posts);
    })
  }

}
