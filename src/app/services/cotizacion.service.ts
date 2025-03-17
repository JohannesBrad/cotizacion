import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CotizacionService {
  private apiUrl = 'https://api.bluelytics.com.ar/v2/latest';

  constructor(private http: HttpClient) {}

  getCotizacion(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
