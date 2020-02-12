import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [85, 69, 65, 51, 56, 55, 62, 70, 68, 74, 84, 87], label: 'Produced energy' },
    { data: [80, 66, 60, 49, 54, 53, 58, 68, 66, 73, 80, 84], label: 'Consumed energy' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(46, 204, 113, .2)',
      borderColor: 'rgba(39, 174, 96, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(231, 76, 60, .2)',
      borderColor: 'rgba(192, 57, 43, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit(): void {
  }

}
