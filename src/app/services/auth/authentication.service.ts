import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiEndPoint: string = "http://65.0.155.254:5001";

  constructor(private http: HttpClient) { }

  login(userCred: {username: string | null, password: string | null}): Observable<any> {
    return this.http.post(`${this.apiEndPoint}/test/auth/login`, userCred);
  }
}
