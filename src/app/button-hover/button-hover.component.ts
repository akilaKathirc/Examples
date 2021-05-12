import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-hover',
  templateUrl: './button-hover.component.html',
  styleUrls: ['./button-hover.component.scss']
})
export class ButtonHoverComponent implements OnInit {
  public NGStyle: boolean = false;
  public count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  ChangeCssStyle() {
    this.NGStyle = !this.NGStyle;
  }

  ChangeCssClass() {
    this.count++;
  }
}
