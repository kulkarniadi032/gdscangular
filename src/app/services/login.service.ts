import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  adminLoginData(data: any) {
    return this.http.post(
      'https://vast-hamlet-33530.herokuapp.com/api/v1/login',
      data
    );
  }
}
