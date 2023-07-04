import { Component, OnInit } from '@angular/core';
import{PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.scss']
})
export class LoadmoreComponent implements OnInit {
  posts: any[] = [];
  currentPage = 1;
  perPage = 12;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.loadMorePosts(this.currentPage, this.perPage)
      .subscribe(posts => {
        this.posts = this.posts.concat(posts);
      });
  }

  loadMorePosts() {
    this.currentPage++;
    this.loadPosts();
  }

   // Get the post featured image  proper way(without using the plugin)
   getFeaturedImage(post: any): string {
    //console.log(post._embedded['wp:featuredmedia'][0].source_url);
    return post._embedded['wp:featuredmedia'][0].source_url;
  }

}
