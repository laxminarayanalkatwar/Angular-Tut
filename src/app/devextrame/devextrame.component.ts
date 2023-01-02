import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  Appointment,
  AppService,
  Billionaires,
  ComplaintsWithPercent,
  Employee,
  Piechart,
  Product,
  ProductsService,
  Service,
  ServiceChart,
} from '../service-component.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-devextrame',
  templateUrl: './devextrame.component.html',
  styleUrls: ['./devextrame.component.css'],
  providers: [AppService, Service, ServiceChart],
})
export class DevextrameComponent implements OnInit, OnDestroy {
  @Input() value: any;

  employees: Employee[];
  appointments: Appointment[];
  products: Product[];
  constructor(
    service: AppService,
    service2: Service,
    servicechart: ServiceChart,
    private service3: ProductsService,
    private servicePiechart: Piechart
  ) {
    this.appointments = service.getAppointments();
    this.employees = service2.getEmployees();
    this.dataSource = servicechart.getComplaintsData();
    this.billionaires = servicePiechart.getBillionaires();
  }
  currentDate: any = new Date(2021, 4, 25);
  galleryDataSource = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSr9mO3lo0rnL5EcQCH_ZP-9H_HwLqcdpD9PVBwqe&s',
    'https://media.gettyimages.com/id/175280583/photo/medhaghat-waterfall.jpg?s=612x612&w=gi&k=20&c=oGvSjTvmED80G-Y4b3-FKvvA4q6QbFRlsvgt6QPNQ3M=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsBOBsr2vrR4BX4Cng0YwptuKqC-GCioiKDFY7wFZ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHi1SxHaWiXRYFib9Xi98MlZUEudtV2kRnRr7-am56&s',
  ];
  getDisplayExpr(item: any) {
    return item && item.FirstName + ' ' + item.LastName;
  }
  dataSource: ComplaintsWithPercent[];

  customizeTooltip = (info: any) => ({
    html:
      `<div><div class='tooltip-header'>${info.argumentText}</div>` +
      "<div class='tooltip-body'><div class='series-name'>" +
      `<span class='top-series-name'>${info.points[0].seriesName}</span>` +
      ": </div><div class='value-text'>" +
      `<span class='top-series-value'>${info.points[0].valueText}</span>` +
      "</div><div class='series-name'>" +
      `<span class='bottom-series-name'>${info.points[1].seriesName}</span>` +
      ": </div><div class='value-text'>" +
      `<span class='bottom-series-value'>${info.points[1].valueText}</span>` +
      '% </div></div></div>',
  });

  customizeLabelText = (info: any) => `${info.valueText}%`;
  // ngOnInit = () => {
  //   this.products = this.service3.getProducts();
  // }
  intervalSubscription: Subscription;
  data: any;
  orderstatus: Observable<any>;
  ngOnInit() {
    this.products = this.service3.getProducts();

    this.orderstatus = new Observable((observer) => {
      setTimeout(() => {
        observer.next('In progress');
      }, 4000);
      setTimeout(() => {
        observer.next('Processing...');
      }, 8000);
      setTimeout(() => {
        observer.next('Completed...');
      }, 12000);
      setTimeout(() => {
        observer.complete();
      }, 12000);
    });

    this.intervalSubscription = this.orderstatus.subscribe((data) => {
      this.data = data;
    });
  }
  billionaires: Billionaires[];
  customizeText(pointInfo: any) {
    return pointInfo.value + ' billionaires';
  }
  contentTemplate(data: any) {
    return data.argumentText;
  }
  onPointClick(e: any) {
    const point = e.target;
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  }
  fruits = [
    { fruit: 'Apples', count: 10 },
    { fruit: 'Oranges', count: 12 },
    { fruit: 'Lemons', count: 15 },
    { fruit: 'Pears', count: 20 },
    { fruit: 'Pineapples', count: 3 },
  ];
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
