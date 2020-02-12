import { Component, OnInit } from '@angular/core';
import { options, Chart, ctx } from 'chart.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.css']
})
export class PersonalDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  public consumedCost: number = 22.45;
  public producedCost: number = 34.76;
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 0], label: 'This Month' }
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
