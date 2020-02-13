import { Component, OnInit } from '@angular/core';
import {ConsumerService} from '../../../../core/services/consumer.service';
import { options, Chart, ctx } from 'chart.js'
import { Router } from '@angular/router';
import { Consumer } from 'src/app/shared/models/consumer.model';

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.css']
})
export class PersonalDashboardComponent implements OnInit {

  ngOnInit(): void {
    this.getConsumers();
  }

  consumers: Consumer[] = [];
  dataloaded: boolean = false;
  title = 'Energy-Stxck';

  constructor(private consumerService: ConsumerService) {  }

  getConsumers(){
    this.consumerService.getConsumers().subscribe(c =>{
      this.consumers = c;
      // this.consumers.forEach(c => {
      //   this.data.push[c.electricityConsumedPerDay, 5000,0]
      // });
      this.chartDatasets = [
        { data: this.consumers[0].electricityConsumedPerDay, label: 'This Month' }
      ];
      this.dataloaded = true;
      console.log(this.consumers);
    } );
  }

  public consumedCost: number = 22.45;
  public producedCost: number = 34.76;
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    // { data: 0, label: 'This Month' }
  ];

  public chartLabels: Array<any> = ['Consumed', 'Produced'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
