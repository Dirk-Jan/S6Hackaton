import { Component, OnInit } from '@angular/core';
import { ConsumerService } from './core/services/consumer.service';
import { Consumer } from './shared/models/consumer.model';
import { Producer } from './shared/models/producer.model';
import { ProducerService } from './core/services/producer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.getConsumers();
    this.getProducers();
  }

  consumers: Consumer[] = [];
  producers: Producer[] = [];
  title = 'Energy-Stxck';

  constructor(
    private consumerService: ConsumerService,
    private producerService: ProducerService
    ) {  }

  getConsumers(){
    this.consumerService.getConsumers().subscribe(c => this.consumers = c);
  }
  getProducers(){
    this.producerService.getProducers().subscribe(p => this.producers = p);
  }

}
