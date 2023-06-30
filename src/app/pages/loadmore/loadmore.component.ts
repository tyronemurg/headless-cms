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

}
