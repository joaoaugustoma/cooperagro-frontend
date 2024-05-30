import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  formData: any = {};

  constructor() { }

  setFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  getFormData() {
    return this.formData;
  }

  resetFormData() {
    this.formData = {};
  }

  submit() {
    // submit the form data to the server
  }

  register(formData: any) : Observable<any> {
    return of(null)
  }
}
