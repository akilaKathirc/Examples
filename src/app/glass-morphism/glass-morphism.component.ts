import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { take, map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-glass-morphism',
  templateUrl: './glass-morphism.component.html',
  styleUrls: ['./glass-morphism.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class GlassMorphismComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  combineAll() {
    const source$ = interval(100).pipe(take(3));
    const source1$ = source$.pipe(
      map(val => interval(1000).pipe(
        map(innerval => `result (${val}) - ${innerval}`),
        take(5)
      ))
    );
    const obs = source1$.pipe(combineAll());
    obs.subscribe(x =>
      console.log(x)
    );

  }


}
