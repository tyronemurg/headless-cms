import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {EnvService} from '../services/env.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost/webwarrior/wp-json/wp/v2/posts';
  posts: any;
  constructor(private http: HttpClient,private env: EnvService,) { }

  getPosts(page: number, perPage: number): Observable<any[]> {
    const params = new HttpParams()
      .set('_embed', '')
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<any[]>(this.apiUrl, { params });
  }


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
