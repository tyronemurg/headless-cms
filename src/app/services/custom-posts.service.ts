import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {EnvService} from '../services/env.service';

@Injectable({
  providedIn: 'root'
})
export class CustomPostsService {
  customPosts: any;
  constructor(private http: HttpClient,private env: EnvService,) { }


  getListOfCustomPosts(): Observable<any> {
    return this.http.get<any>(this.env.custom_post_url);
  }

  getSingleCustomPost(id: any) {
    return this.http.get(this.env.custom_post_single_url + '/' + id + '?_embed' )
      .pipe(
        tap(customPosts => console.log(customPosts)),
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
