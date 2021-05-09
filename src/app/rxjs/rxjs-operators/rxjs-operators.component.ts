import { Component, OnInit } from '@angular/core';
import { interval, of, Observable, Subject, empty, ReplaySubject, fromEvent, forkJoin, combineLatest } from 'rxjs';
import {
  take, map, combineAll,
  mergeMap, pluck, share,
  shareReplay, tap, switchMap, startWith, scan, mapTo, delay
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  constructor() {

  }
  public combinealloutput: any;



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
      this.combinealloutput = x
    );

  }

  share() {
    const apiCall = new Subject<{ data: any, url: string }>();
    const urlstr = apiCall.pipe(pluck('url')
      , share()
    );
    const first = urlstr.subscribe((a) => {
      console.log('first');
      console.log(a);
    }
    );

    apiCall.next({ data: {}, url: 'share' });
    const second = urlstr.subscribe((b) => {
      console.log('second');
      console.log(b);
    });

  }

  shareReplay() {
    const apiCall = new Subject<{ data: any, url: string }>();
    const urlstr = apiCall.pipe(pluck('url'),
      tap(() => console.log('api pinged')),
      shareReplay());
    const first = urlstr.subscribe((a) => {
      console.log('first');
      console.log(a);
    }
    );

    apiCall.next({ data: {}, url: 'share replay' });
    const second = urlstr.subscribe((b) => {
      console.log('second');
      console.log(b);
    });

    urlstr.subscribe((b) => {
      console.log('third');
      console.log(b);
    });


    urlstr.subscribe((b) => {
      console.log('four');
      console.log(b);
    });
  }


  ReplaySubject() {
    const apiCall = new ReplaySubject<{ data: any, url: string }>();
    const urlstr = apiCall.pipe(pluck('url'),
      // tap(() => console.log('api pinged'))
    );
    const first = urlstr.subscribe((a) => {
      console.log('first  ', a);
    }
    );

    apiCall.next({ data: {}, url: 'Replay Subject' });
    const second = urlstr.subscribe((b) => {
      console.log('second  ', b);
    });


    const third = urlstr.subscribe((b) => {
      console.log('third   ', b);
    });

    apiCall.next({ data: {}, url: 'Replay Subject third' });

    urlstr.subscribe((b) => {
      console.log('fourth   ', b);
    });

    apiCall.next({ data: {}, url: 'Replay Subject fourth' });

    urlstr.subscribe((b) => {
      console.log('fourth   ', b);
    });
  }

  // The main difference between switchMap and other flattening operators is the cancelling effect. 
  // On each emission the previous inner observable 
  // is cancelled and the new observable is subscribed

  switchMapfunc() {
    fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000))
    ).subscribe((c) => console.log(c));
  }

  mergeMapFunc() {
    const source1$ = interval(1000).pipe(take(3));
    const source2$ = interval(1000).pipe(take(5));

    source1$.pipe(
      mergeMap((outerobs) => source2$.pipe(
        map((c) => `result outer sub val (${outerobs}) -- inner sub value ${c}`)
      )
      )).subscribe(c => {
        console.log(c)
      })
  }

  //   One common use case for this is if you wish to issue multiple requests on page load 
  //  and only want to take action when a response has been received for all


  forkJoinFunc() {
    const source1$ = interval(1000).pipe(take(3));
    const source2$ = interval(1000).pipe(take(2));
    const source3$ = of('red');
    const source4$ = of('black').pipe(delay(100));


    forkJoin({ source1$, source2$, source3$, source4$ })
      .subscribe((c) => console.log(c));


    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users'),
        source4$
      }
    )
      // { google: object, microsoft: object, users: array }
      .subscribe(console.log);
  }


  combineLatestFunc() {
    const redtotal = document.getElementById('red-total');
    const blacktotal = document.getElementById('black-total');
    const total = document.getElementById('total');

    //arrow function

    const addClickEvent$ = id =>
      fromEvent(document.getElementById(id), 'click').pipe(
        // tap((m) => console.log(m)),
        mapTo(1),
        scan((acc, cur) => acc + cur, 0),
        startWith(0)
      );


    combineLatest(addClickEvent$('red'), addClickEvent$('black')).subscribe(
      ([red, black]: any) => {
        redtotal.innerHTML = red;
        blacktotal.innerHTML = black;
        total.innerHTML = red + black;
      }
    )


  }
}

