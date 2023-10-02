import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class GravityFormService {
  private apiUrl = 'http://localhost/webwarrior/wp-json/gf/v2/forms'; // Replace with your WordPress site's REST API URL
  // private consumerKey = 'yourkey'; // Replace with your WordPress API consumer key
  // private consumerSecret = 'yourjey'; 
  private apiKey = 'yourkey';
  private formId = 1;
  
  constructor(private http: HttpClient,private oauthService: OAuthService) { }

  // getForm(formId: number) {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Basic ${btoa(`${this.consumerKey}:${this.consumerSecret}`)}`
  //   });

  //   return this.http.get<any>(`${this.apiUrl}/gf/v2/forms/${formId}`, { headers });
  // }

  submitForm(formData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('key:secret')}`
      //'Authorization': 'Basic ' + btoa('key:secret'),
    });

     const body = {
      form_id: this.formId,
      input_values: formData
    };

    return this.http.post(`${this.apiUrl}/${this.formId}/entries`, formData, { headers });

   

    // return this.http.post<any>(`${this.apiUrl}/gf/v1/forms/${this.formId}/submissions`, body, { headers });
  }

  // private convertFormDataToObject(formData: FormData): { [key: string]: any } {
  //   const data: { [key: string]: any } = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });
  //   return data;
  // }

}
