import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private wordpressUrl = 'http://localhost/webwarrior/wp-json/wp/v2/pages/2?acf_format=standard';

  constructor(private http: HttpClient) { }

  // Get WP Page Content
  getPageContent(): Observable<any> {
    return this.http.get<any>(this.wordpressUrl);
  }
}
