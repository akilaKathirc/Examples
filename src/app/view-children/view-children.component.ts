import {
  AfterViewInit, Component, OnChanges, OnInit, SimpleChanges,
  ChangeDetectorRef,
  ViewChild, ViewChildren, QueryList, AfterViewChecked, ChangeDetectionStrategy
} from '@angular/core';
import { NeonButtonComponent } from '../neon-button/neon-button.component';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ViewChildrenComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public counter: number[] = [1, 2, 3, 4];
  @ViewChild(NeonButtonComponent) neon: NeonButtonComponent;

  @ViewChildren(NeonButtonComponent) neons: QueryList<NeonButtonComponent>;

  public setVal: string;

  constructor(private cref: ChangeDetectorRef) {
  }
  ngAfterViewChecked(): void {

  }

  ngAfterViewInit(): void {
    // setInterval(() => {
    const dt = new Date();
    this.neons.forEach((item, index, arr) => {
      this.counter.push(index);

      item.title = 'inside loop ' + index + ' ' + dt.getSeconds();
      this.cref.detectChanges();
    });
    // }, 1000);
  }

  ngOnInit(): void { }

}
