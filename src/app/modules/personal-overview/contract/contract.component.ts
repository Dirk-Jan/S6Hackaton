import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  headElements = ['Electricity tariff', 'Price in kWh'];

  elements: any = [
    {tariff: 'Normal', price: 0.244}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
