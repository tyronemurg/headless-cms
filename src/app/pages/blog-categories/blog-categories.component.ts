import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {

  posts: any;
 
  constructor(private http: HttpClient,private postsService: PostsService){}
 
  ngOnInit(): void{

    //Get Category From Service
    // const categorySlug = '34'; // Replace with your desired category slug
    // this.postsService.getPostsByCategory(categorySlug)
    //   .subscribe((data : any) =>{
    //     this.posts = data;
    //     console.log(this.posts);
    //   });

    this.http.get('http://localhost/webwarrior/wp-json/wp/v2/posts/?_embed/&categories=34').subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
    })
  }

}
