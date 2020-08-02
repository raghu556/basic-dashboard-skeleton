import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoRestService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }

}
