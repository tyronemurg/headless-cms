import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import{EnvService} from '../services/env.service';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: any;
  //productsUrl = 'http://localhost/webwarrior/wp-json/wc/v3/products?consumer_key=xxxx&consumer_secret=xxxx';
  constructor(private http: HttpClient,private env: EnvService,private router: Router,
    private route: ActivatedRoute,) { }


  getListOfPosts(): Observable<any> {
    return this.http.get<any>(this.env.post_url);
  }

  getSinglePost(id: any) {
    return this.http.get(this.env.post_single_url + '/' + id + '?_embed' )
      .pipe(
        tap(posts => console.log(posts)),
        catchError(this.handleError(`Get Posts ID id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
}
