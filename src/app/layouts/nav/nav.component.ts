import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  public systemStatus = false;

  constructor() { }

  ngOnInit() {
  }

}
