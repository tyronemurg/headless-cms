import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private http: HttpClient
  ) { }

  ngOnInit(): void {

   let postid = this.route.snapshot.params['id'];

    this.http.get(`http://localhost/webwarrior/wp-json/wp/v2/posts/${postid}?_embed`).subscribe((data:any) =>{
   // console.log(data);
    this.posts = data;
    //console.log(data);
    
  
  });
}

 

}
