import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiEndPoint: string = 'http://65.0.155.254:5001';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  setTokenHeader() {
    const userToken = this.localStorage.getKey('userToken');
    const headers = { Authorization: `Bearer ${userToken}` };
    return headers;
  }

  getDepartmentList(offset: number, limit: number): Observable<any> {
    const headers = {...this.setTokenHeader(), 'offset': offset.toString(), 'limit': limit.toString()};
    return this.http.get(`${this.apiEndPoint}/admin/department/list`, {
      headers,
    });
  }
}
