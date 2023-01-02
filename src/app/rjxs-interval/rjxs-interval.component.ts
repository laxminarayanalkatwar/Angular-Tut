import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rjxs-interval',
  templateUrl: './rjxs-interval.component.html',
  styleUrls: ['./rjxs-interval.component.css'],
})
export class RjxsIntervalComponent implements OnInit, OnDestroy {
  intervalSubscription: Subscription;
  error = ' ';
  data: any;
  complete: any;
  ngOnInit() {
    let customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 10) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.intervalSubscription = customObservable
      .pipe(
        filter((data: any) => data % 2 === 0),
        map((data: any) => {
          return `Binary Number of ${data} is ` + data.toString(2);
        })
      )
      .subscribe(
        (data: any) => {
          return (this.data = data);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          this.complete = 'Count is greater than 10';
        }
      );
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
