import { Component, OnInit } from '@angular/core';
import { ConsumerService } from './core/services/consumer.service';
import { Consumer } from './shared/models/consumer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.getConsumers();
  }

  consumers: Consumer[] = [];
  title = 'Energy-Stxck';

  constructor(private consumerService: ConsumerService) {  }

  getConsumers(){
    this.consumerService.getConsumers().subscribe(c => this.consumers = c);
  }

}
