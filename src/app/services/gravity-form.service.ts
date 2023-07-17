import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GravityFormService {
  private apiUrl = 'http://localhost/webwarrior/wp-json'; // Replace with your WordPress site's REST API URL
  // private consumerKey = 'ck_yourkey'; // Replace with your WordPress API consumer key
  // private consumerSecret = 'cs_yoursecret'; 
  private apiKey = 'yourkey';
  private formId = 1;
  
  constructor(private http: HttpClient) { }

  // getForm(formId: number) {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Basic ${btoa(`${this.consumerKey}:${this.consumerSecret}`)}`
  //   });

  //   return this.http.get<any>(`${this.apiUrl}/gf/v2/forms/${formId}`, { headers });
  // }

  submitForm(formData: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      form_id: this.formId,
      input_values: formData
    };

    return this.http.post<any>(`${this.apiUrl}/gf/v1/forms/${this.formId}/submissions`, body, { headers });
  }

  private convertFormDataToObject(formData: FormData): { [key: string]: any } {
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }

}
