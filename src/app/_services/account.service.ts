import { Injectable } from '@angular/core';
import { pathvariable } from '../../constants/pathvariables';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUri = pathvariable.apiUrl;
  constructor(private httpclient: HttpClient) {}
  register(model: any): Observable<any> {
    return this.httpclient.post<any>(this.baseUri + 'accounts/register', model);
  }
}
