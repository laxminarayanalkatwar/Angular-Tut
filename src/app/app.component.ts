import {
  Component,
  ViewChild,
  ElementRef,
  AfterContentInit,
  ContentChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NewoneComponent } from './newone/newone.component';
import { AppService } from './service-component.service';

@Component({
  //decorator
  selector: 'app-root', // call the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent implements AfterContentInit, OnInit,OnDestroy {
  // logic + ui part
  // data = "Child Component"
  constructor(private userservice: AppService) {}
  data = 'Movies Title!';
  name = '';
  title = 'my-app';
  Submit() {
    prompt('Enter your Name');
  }
  value = '';
  // values: Array<string> = new Array<string>();
  values: string[] = [];
  CallsomeLogic() {
    this.values.push(this.value);
    this.value = '';
  }
  parentFunction = (data: any) => {
    console.warn(data);
    this.name = data.name;
  };

  sendData2 = 'Child';
  sendata33 = (data: string) => {
    return data;
  };
  count = 0;
  inparent() {
    this.count++;
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  userAdded = false;
  userAddedSubscription: Subscription;
  ngOnInit() {
   this.userAddedSubscription = this.userservice.userAddedEvent.subscribe((data) => {
      this.userAdded = data;
    });
  }
  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe()
  }
}
