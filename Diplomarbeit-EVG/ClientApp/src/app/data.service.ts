import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  sendDataToBackend(data: any) {
    const url = 'https://localhost:44423/api/DSGVO'; // Ersetzen Sie dies durch die URL Ihres Backends

    return this.http.post(url, data);
  }
}
