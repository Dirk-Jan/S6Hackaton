import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producer } from 'src/app/shared/models/producer.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProducerService {

    baseUrl: string = environment.apiUrl + 'producers';

    constructor(private http: HttpClient) { }

    getConsumers(): Observable<Producer[]>{
        return this.http.get<Producer[]>(this.baseUrl); 
      }
  }