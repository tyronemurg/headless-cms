import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{CustomPostsService} from '../../services/custom-posts.service';

@Component({
  selector: 'app-custom-post-single',
  templateUrl: './custom-post-single.component.html',
  styleUrls: ['./custom-post-single.component.scss']
})
export class CustomPostSingleComponent implements OnInit {
  id: any;
  customPosts: any;
  constructor(
    //private router: Router,
    private route: ActivatedRoute,
    //private http: HttpClient,
    private customPostsService: CustomPostsService
  ) { }

  ngOnInit(): void {
    //Get Single custom Post
    this.customPostsService.getSingleCustomPost(this.route.snapshot.params['id']).subscribe((data:any) =>{
      
      this.customPosts = data;
      // console.log(this.posts);
    });
  }

  getACFFields(acf: any): { key: string; value: any }[] {
    return Object.keys(acf).map(key => ({ key, value: acf[key] }));
  }

}
