import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consumer } from 'src/app/shared/models/consumer.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ConsumerService {

    baseUrl: string = environment.apiUrl + 'consumers';

    constructor(private http: HttpClient) { }

    getConsumers(): Observable<Consumer[]>{
        return this.http.get<Consumer[]>(this.baseUrl); 
      }
  }