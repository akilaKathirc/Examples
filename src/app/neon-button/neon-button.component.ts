import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neon-button',
  templateUrl: './neon-button.component.html',
  styleUrls: ['./neon-button.component.scss']
})
export class NeonButtonComponent implements OnInit {
  public title: string = 'sdfsf';
  constructor() { }

  ngOnInit(): void {
  }
}
