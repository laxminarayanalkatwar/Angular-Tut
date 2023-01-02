import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, interval, Observable, of, Subscription } from 'rxjs';
import { filter, find, map } from 'rxjs/operators';
import { AppService, DataService } from '../service-component.service';
import { LoggingService } from '../Service/logging.service';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css'],
  providers: [LoggingService, DataService, AppService],
})
export class RxJSComponent
  implements OnInit, OnChanges, AfterContentInit, OnDestroy
{
  @Input() parentData: any;
  @ContentChild('Component') Component100: ElementRef;
  constructor(
    private logginservice: LoggingService,
    private router: Router,
    private route: ActivatedRoute,
    private dataservice: DataService,
    private userAd: AppService,
    private activated: ActivatedRoute
  ) {}

  @ViewChild('validate') validate: ElementRef;
  againts: Observable<string> = of('');
  againtName = '';
  // ngOnInit(): void {
  //   this.againts = new Observable(function (observer) {
  //     try {
  //       observer.next('ram');
  //       setInterval(() => {
  //         observer.next('mark');
  //       }, 3000);
  //       setInterval(() => {
  //         observer.next('sita');
  //       }, 5000);
  //     } catch (e) {
  //       observer.error(e);
  //     }
  //   });
  //   this.againts.subscribe((data) => {
  //     this.againtName = data;
  //   });
  // }

  students$: Observable<any> = of({
    id: 10,
    name: 'ram',
  });
  intervalSubscription: Subscription;
  Jsonplaceholder: any;
  loading: boolean = true;

  ngOnInit() {
    this.dataservice.dataFromSources().subscribe(
      (data) => {
        console.log('ngOnInit =>', data.title);
        // this.loading = true;
        this.Jsonplaceholder = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
    // this.students$.subscribe((data) => {
    //   console.log(data);
    // });
    // this.logginservice.logtoConsole('rx-js');
    // console.warn('queryParams', this.route.snapshot.queryParams);
    // console.warn('fragment', this.route.snapshot.fragment);

    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.warn(count);
    // });

    let customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('Count is greather than 3');
        }
        if (count > 2) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    this.intervalSubscription = customObservable
      .pipe(
        map((data: any) => {
          return data * 2;
        })
      )
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log('Complete works');
        }
      );
  }
  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
  rajxEventObservable() {
    // const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    // btnObservable$.subscribe((data)=>{
    //   console.log(data);
    // })
  }
  ngAfterContentInit(): void {
    this.dataservice.dataFromSources().subscribe((data) => {
      console.log('ngAfterContentInitdata =>', data);
    });
    // console.log("ChildComponent100=>",this.Component100.nativeElement.innerHTML);
    console.log('activated Route', this.activated);
  }
  Navigate() {
    console.log('Navigate works!');
    this.router.navigateByUrl('/about');
    this.router.navigate(['about']);
    this.router.navigate(['/about'], {
      queryParams: { page: 1, search: 'Leela' },
      fragment: 'Loading',
    });
  }

  onuseradd() {
    this.userAd.addUser();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }
}
