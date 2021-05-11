import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-bindings',
  templateUrl: './template-bindings.component.html',
  styleUrls: ['./template-bindings.component.scss']
})
export class TemplateBindingsComponent implements OnInit {
  public imgUrl = '../../assets/images/logoC.jpg';

  public imgUrlNoExt = '../../assets/images/logoC';

  public message: string = 'Hi Template Bindings.....';

  public templateForm: FormGroup = new FormGroup({
    showhideControl: new FormControl(true),
  });
  constructor() {
  }

  ngOnInit(): void {
  }
}
