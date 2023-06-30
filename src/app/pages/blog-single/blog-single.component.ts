import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {
  id: any;
  posts: any;
  images: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {

    //Get Single Post
    this.postsService.getSinglePost(this.route.snapshot.params['id']).subscribe((data:any) =>{
      
       this.posts = data;
       // console.log(this.posts);
     });

  //  let postid = this.route.snapshot.params['id'];
  //   this.http.get(`http://localhost/webwarrior/wp-json/wp/v2/posts/${postid}?_embed`).subscribe((data:any) =>{
  //  // console.log(data);
  //   this.posts = data;
  //   //console.log(data);
    
  
  // });
}

ionViewDidEnter() {



}

}
