import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  formData: any = {};
  apiUrl: string = "http://localhost:8080/auth"

  //constructor(private httpClient: HttpClient) { }

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
    return of(formData);
    /*
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { this.formData.name, this.formData.email, this.formData.password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
    */
  }
}
