import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Product, ProductsService } from '../service-component.service';
import { DevextrameComponent } from '../devextrame/devextrame.component';
// import template from "../devextrame/";
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  products: Product[];
  constructor(
    private http: HttpClient,
    private modalService: NzModalService,
    private service: ProductsService
  ) {}

  dataFromSource(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: new HttpHeaders({
        'custom-header': 'name',
      }),
      params: new HttpParams().set('custom', 'hello'),
    });
  }
  jsonpalaceHolder: any;
  ngOnInit(): void {
    this.dataFromSource().subscribe(
      (data) => {
        this.jsonpalaceHolder = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Fetch Success');
      }
    );
    this.products = this.service.getProducts();
  }
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  open(){
    console.log('nzAfterOpen');
  }
  close(){
    console.log('nzAfterClose');
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  isVisible2 = false;
  isOkLoading = false;
  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible2 = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel2(): void {
    this.isVisible2 = false;
  }
  confirmModal?: NzModalRef; // For testing by now

  showConfirm(): void {
    this.confirmModal = this.modalService.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent:
        'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }
  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'This is a notification message',
      nzContent: 'This modal will be destroyed after 1 second',
    });

    window.setTimeout(() => modal.destroy(), 1000);
  }
  info(): void {
    this.modalService.info({
      nzTitle: 'This is a notification message',
      nzContent:
        '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK'),
    });
  }
  error(): void {
    this.modalService.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...',
    });
  }

  warning(): void {
    this.modalService.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...',
    });
  }
  Content(): void {
    this.modalService.success({
      nzTitle: 'This is an devextrame Page',
      nzContent: DevextrameComponent,
      nzWidth: 720,
      nzCloseIcon: '',
      nzCancelText: 'cancel',
      // nzOkDanger:true,
      // nzAutofocus:'ok'
    });
  }
  create = () => {
    this.modalService.create({
      nzTitle: 'Create Page ',
      nzContent: DevextrameComponent,
      nzComponentParams: { value: 'Message' },
      nzOnOk: () => {
        console.log('Okay');
      },
      nzOnCancel: () => {
        console.log('Cancel');
      },
    });
  };
}
