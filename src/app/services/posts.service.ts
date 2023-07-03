import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {EnvService} from '../services/env.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // private apiUrl = 'http://localhost/webwarrior/wp-json/wp/v2/posts';
  // private baseUrl = 'http://localhost/webwarrior/wp-json/wp/v2';
  // private postsUrl = `${this.baseUrl}/posts`;
  posts: any;
  constructor(private http: HttpClient,private env: EnvService,) { }

  // Get Posts with Pagination
  getPosts(page: number, perPage: number): Observable<any[]> {
    const params = new HttpParams()
      .set('_embed', '')
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<any[]>(this.env.apiUrl, { params });
  }
// Get Posts with Load more
  loadMorePosts(page: number, perPage: number): Observable<any[]> {
    const url = `${this.env.postsUrl}?_embed&per_page=${perPage}&page=${page}`;
    return this.http.get<any[]>(url);
  }

// Get Posts List
  getListOfPosts(): Observable<any> {
    return this.http.get<any>(this.env.post_url);
  }

// Get Single Post
  getSinglePost(id: any) {
    return this.http.get(this.env.post_single_url + '/' + id + '?_embed' )
      .pipe(
        tap(posts => console.log(posts)),
        catchError(this.handleError(`Get Posts ID id=${id}`))
      );
  }

  // Get Posts by Category
  getPostsByCategory(categorySlug: string) {
    const url = `${this.env.catApiUrl}/posts/?_embed/&categories=${categorySlug}`;
    return this.http.get(url);
  }

  // Error handle
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // getCustomFields(postId: number): Observable<any> {
  //   const url = `${this.env.baseUrl}/posts/${postId}/acf`;
  //   return this.http.get<any>(url);
  // }

  // getPostWithCustomFields(postId: number): Observable<any> {
  //   const url = `${this.env.customFieldbaseUrl}/posts/${postId}?_embed=true`;
  //   return this.http.get<any>(url);
  // }
  
}
