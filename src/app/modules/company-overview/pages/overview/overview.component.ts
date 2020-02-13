import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [130, 150, 180, 230, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['DAF', 'PHILIPS', 'TATA Steel LTD', 'ASML', 'SHELL'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  elements: any = [
    {CustomerId: 158542435, Company: 'ASML', Consumed: '230 MWH', Average: '2.3400 MWH Total'},
    {CustomerId: 577533523, Company: 'TATA Steel LTD', Consumed: '180 MWH', Average: '1.876 MWH Total'},
    {CustomerId: 654234694, Company: 'PHILIPS', Consumed: '150 MWH', Average: '1.2405 MWH Total'},
  ];

  headElements = ['CustomerId', 'Company', 'Consumed', 'Average'];

  public mdchartDatasets: Array<any> = [
    { data: [50, 60, 45, 55, 35], label: 'My First dataset' }
  ];

  public mdchartLabels: Array<any> = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag', 'Groningen'];

  public mdchartColors: Array<any> = [
    {
      backgroundColor: ['#aa66cc', '#0d47a1', '#3F729B', '#004d40', '#cddc39'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public mdchartOptions: any = {
    responsive: true
  };

  mdelements: any = [
    {CustomerId: 142322435, Community: 'Rotterdam', Consumed: '60 MWH', Average: '1.4400 MWH Total'},
    {CustomerId: 297567835, Community: 'Den Haag', Consumed: '55 MWH', Average: '1.245 MWH Total'},
    {CustomerId: 346894477, Community: 'Amsterdam', Consumed: '50 MWH', Average: '1.145 MWH Total'},
  ];

  mdheadElements = ['CustomerId', 'Community', 'Consumed', 'Average'];

  public lchartDatasets: Array<any> = [
    { data: [76, 60, 78, 91, 35], label: 'My First dataset' }
  ];

  public lchartLabels: Array<any> = ['Van Lierop', 'Eriksen', 'Peters', 'Fransen', 'Huijbers'];

  public lchartColors: Array<any> = [
    {
      backgroundColor: ['#ffbb33', '#ff4444', '#00C851', '#2BBBAD', '#33b5e5'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public lchartOptions: any = {
    responsive: true
  };

  lelements: any = [
    {CustomerId: 142322435, Name: 'Fransen', Consumed: '914 kWh', Average: '1.4 MWH Total'},
    {CustomerId: 297567835, Name: 'Peters', Consumed: '780 kWh', Average: '1.2 MWH Total'},
    {CustomerId: 346894477, Name: 'Van Lierop', Consumed: '756 kWh', Average: '1.1 MWH Total'},
  ];

  lheadElements = ['CustomerId', 'Name', 'Consumed', 'Average'];

  constructor() { }

  ngOnInit(): void {
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
