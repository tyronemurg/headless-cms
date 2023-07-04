import { Component, OnInit } from '@angular/core';
import{PostsService} from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pageinate',
  templateUrl: './pageinate.component.html',
  styleUrls: ['./pageinate.component.scss']
})
export class PageinateComponent implements OnInit {
  posts: any;
  currentPage = 1;
  perPage = 12;
  totalPages: any;
  constructor(private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        const page = params['page'];
        this.currentPage = page ? parseInt(page, 12) : 1;
        this.getPosts();
      });
    }

    getPosts(): void {
      this.postsService.getPosts(this.currentPage, this.perPage).subscribe(posts => {
        this.posts = posts;
        this.totalPages = Number(this.posts.headers.get('X-WP-TotalPages'));
      });
    }

    // Get the post featured image  proper way(without using the plugin)
  getFeaturedImage(post: any): string {
    //console.log(post._embedded['wp:featuredmedia'][0].source_url);
    return post._embedded['wp:featuredmedia'][0].source_url;
  }

    goToPage(page: number): void {
     
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { page: page.toString() },
          queryParamsHandling: 'merge'
        });
    
    }
  
    // goToPage(page: number): void {
    //   if (page >= 1 && page <= this.totalPages) {
    //     this.router.navigate([], {
    //       relativeTo: this.route,
    //       queryParams: { page: page.toString() },
    //       queryParamsHandling: 'merge'
    //     });
    //   }
    // }
  
    getPaginationRange(): number[] {
      const rangeSize = 12;
      const range = [];
      let start = this.currentPage - Math.floor(rangeSize / 2);
  
      if (start < 1) {
        start = 1;
      } else if (start + rangeSize > this.totalPages) {
        start = this.totalPages - rangeSize + 1;
      }
  
      for (let i = 0; i < rangeSize; i++) {
        range.push(start + i);
      }
  
      return range;
    }

}
