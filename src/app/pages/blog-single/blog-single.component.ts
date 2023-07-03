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
  post: any;
  images: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {

    //Get Single Post
    const postId = +this.route.snapshot.params['id'];
    this.postsService.getSinglePost(postId).subscribe((data:any) =>{
      
    this.post = data;
    console.log(this.post);
     });
     
    //let postid = this.route.snapshot.params['id'];
    //this.http.get(`http://localhost/webwarrior/wp-json/wp/v2/posts/${postid}?_embed`).subscribe((data:any) =>{
    //console.log(data);
    //this.posts = data;
    //console.log(data);
    // });

}

getACFFields(acf: any): { key: string; value: any }[] {
  return Object.keys(acf).map(key => ({ key, value: acf[key] }));
}

// Get the post featured image the proper way without plugin
getFeaturedImage(post: any): string {
  console.log(post._embedded['wp:featuredmedia'][0].source_url);
  return post._embedded['wp:featuredmedia'][0].source_url;
}

ionViewDidEnter() {
}

}
