import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    //this.loginUser(this.username, this.password);
  }

  loginUser(username:any, password:any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const userData = `username=${username}&password=${password}`; 
    const url = 'http://localhost/webwarrior/';
    return new Promise((resolve, reject) => {
      this.http
        .post(`${url}/wp-json/jwt-auth/v1/token`, userData, { headers })
        .subscribe(
          res => {
            resolve(res);
            console.log(res)
          },
          err => {
            resolve(err);
          }
        );
    });
  }

}
