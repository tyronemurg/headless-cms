import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts : any;
 
  constructor(private http: HttpClient){}
 
  ngOnInit(): void{
    this.http.get('http://localhost/your_wp_api/wp-json/wp/v2/posts').subscribe(data =>{
      // for(let key in data){
      //   if(data.hasOwnProperty(key)){
      //     this.posts.push(data[key]);
      //   }
      // }
      this.posts = data;
      console.log(data);
    })
  }
}
