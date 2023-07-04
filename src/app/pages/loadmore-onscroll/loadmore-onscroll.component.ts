import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import{PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-loadmore-onscroll',
  templateUrl: './loadmore-onscroll.component.html',
  styleUrls: ['./loadmore-onscroll.component.scss']
})
export class LoadmoreOnscrollComponent implements OnInit {
  posts: any[] = [];
  currentPage = 1;
  perPage = 12;
  loading = false;

  constructor(private postsService: PostsService,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.postsService.loadMorePosts(this.currentPage, this.perPage).subscribe(posts => {
      this.posts = this.posts.concat(posts);
      this.loading = false;
    });
  }

  // Get the post featured image  proper way(without using the plugin)
  getFeaturedImage(post: any): string {
    //console.log(post._embedded['wp:featuredmedia'][0].source_url);
    return post._embedded['wp:featuredmedia'][0].source_url;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.loadMorePosts();
    }
  }

  loadMorePosts() {
    if (!this.loading) {
      this.currentPage++;
      this.loadPosts();
    }
  }

}
