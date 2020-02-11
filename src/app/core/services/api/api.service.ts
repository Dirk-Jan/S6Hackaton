import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

let BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(location: string, protected http: HttpClient) {
    BASE_URL = BASE_URL + location;
  }

  getAll() {
    return this.http.get(BASE_URL + '/get');
  }

  create(resource: any) {
    return this.http.post(BASE_URL + '/create', resource);
  }

  update(resource: any) {
    return this.http.put(BASE_URL + '/update', resource);
  }

  delete(resource: any) {
    return this.http.delete(BASE_URL + '/delete', resource);
  }
}
