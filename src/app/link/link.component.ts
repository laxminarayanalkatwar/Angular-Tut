import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../App.const';
import { LoggingService } from '../Service/logging.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [LoggingService],
})
// implements
//   OnInit,
//   OnChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
export class LinkComponent {
  @ViewChild('title') marker: ElementRef;
  constructor(
    private loggingservice: LoggingService,
    private route: ActivatedRoute
  ) {
    console.log('constructor called');
  }

  // @ViewChild('title') marker:QueryList<any>;
  movie = Movies;
  colorsets: Record<string, string> = {
    color: 'green',
    backgroundColor: 'yellow',
    fontsize: '2rem',
  };
  ngiff = false;
  color: any = {
    color: 'orange',
  };
  searchValue = '';
  occupation = 'teacher';
  clsName = 'one';
  showmsg = true;
  color3: any = {
    color: 'red',
  };
  greenColor = 'green';
  border = '1px solid black';
  lorem = 'lorem text paragraph style contaner ';
  place = 'placeholder....';
  href = 'http://google.com';
  updatedLink = 'http://oracle.com';
  img =
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';
  showAlert(data: number) {
    alert(`Please Enter Value ${data}`);
  }
  clickfocus() {
    console.log('Focus click');
  }

  sheardata = '';
  shearDatas() {
    console.log(this.sheardata);
  }
  user = {
    userId: 20,
    firstName: 'John',
    lastName: 'Wick',
    DOB: '07/21/2022',
    salery: 12000.56,
  };

  // ngOnChanges() {
  //   console.log('ngOnChanges called');
  // }
  ngOnInit() {
    console.log('ngOnInit called');
    console.warn('queryParams', this.route.snapshot.queryParams);
    console.warn('fragment', this.route.snapshot.fragment);
  }
  // ngDoCheck() {
  //   console.log('ngDoCheck called');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called');
  // }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    this.marker.nativeElement.style.backgroundColor = 'aqua';
  }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called');
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy called');
  // }
  filterString = '';
  arrCustom: any = ['Active', 'Disabled', 'Checked'];
  value: any;
  EnterData() {
    this.arrCustom.push(this.value);
    console.log('data');

    // let loggingserviece = new LoggingService();
    this.loggingservice.logtoConsole('data have changed');
    this.value = '';
  }
}
