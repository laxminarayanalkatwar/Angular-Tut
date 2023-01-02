import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LinkComponent } from './link/link.component';
import { ServicesComponent } from './services/services.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PractiseComponent } from './practise/practise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxJSComponent } from './rx-js/rx-js.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomStyleDirective } from './custom-style.directive';
import { DevextrameComponent } from './devextrame/devextrame.component';
import { DxChartModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DxTreeViewModule } from 'devextreme-angular';
import { DxMapModule } from 'devextreme-angular';
import { DxDropDownButtonModule } from 'devextreme-angular';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import {
  DxSchedulerModule,
  DxButtonModule,
  DxGalleryModule,
} from 'devextreme-angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RjxsIntervalModule } from './rjxs-interval/rjxs-interval.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DxPieChartModule } from 'devextreme-angular';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    AboutComponent,
    LinkComponent,
    ServicesComponent,
    PractiseComponent,
    RxJSComponent,
    CustomPipePipe,
    CustomStyleDirective,
    DevextrameComponent,
    PageNotFoundComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzFormModule,
    BrowserAnimationsModule,
    DxSchedulerModule,
    DxButtonModule,
    DxGalleryModule,
    DxChartModule,
    DxPopupModule,
    HttpClientModule,
    NzDividerModule,
    NzTableModule,
    NzModalModule,
    DxTreeViewModule,
    DxDateBoxModule,
    DxMapModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    NzTimePickerModule,
    RjxsIntervalModule,
    DxPieChartModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
