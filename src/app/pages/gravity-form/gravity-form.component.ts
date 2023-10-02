import { Component, OnInit } from '@angular/core';
import { GravityFormService } from 'src/app/services/gravity-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-gravity-form',
  templateUrl: './gravity-form.component.html',
  styleUrls: ['./gravity-form.component.scss']
})
export class GravityFormComponent implements OnInit {
  form: FormGroup;
  formId = 1; // Replace with the ID of your Gravity Form
  //formFields: any;
  formData = {
    name: ''
    // Initialize additional form fields here
  };
  constructor(private fb: FormBuilder, private gravityFormService: GravityFormService) { 
    this.form = this.fb.group({
      field1: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   // this.loadForm();
  }

  // loadForm() {
  //   this.gravityFormService.getForm(this.formId).subscribe(
  //     (response) => {
  //       console.log('Form retrieved successfully:', response);
  //       // Handle form retrieval
  //     },
  //     (error) => {
  //       console.error('Error retrieving form:', error);
  //       // Handle error retrieving form
  //     }
  //   );
  // }

  onSubmit() {
    if (this.form.valid) {
      this.gravityFormService.submitForm(this.form.value).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
        },
        error => {
          console.error('Error submitting form:', error);
        }
      );
    }
    // this.gravityFormService.submitForm(this.formData).subscribe(
    //   (response) => {
    //     console.log('Form submitted successfully:', response);
    //     // Handle successful form submission
    //   },
    //   (error) => {
    //     console.error('Form submission error:', error);
    //     // Handle form submission error
    //   }
    // );
  }

  // private convertFormDataToObject(formData: FormData): { [key: string]: any } {
  //   const data: { [key: string]: any } = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });
  //   return data;
  // }
}
