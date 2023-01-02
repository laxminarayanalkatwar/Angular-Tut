import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LinkComponent } from './link/link.component';
import { NewoneComponent } from './newone/newone.component';
import { PractiseComponent } from './practise/practise.component';
import { RxJSComponent } from './rx-js/rx-js.component';
import { DevextrameComponent } from './devextrame/devextrame.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: NewoneComponent,
    // loadChildren: () =>
    //   import('./newone/newone.component').then((m) => m.newone.component),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'link',
    component: LinkComponent,
  },
  {
    path: 'practise',
    component: PractiseComponent,
  },
  {
    path: 'rxjs',
    component: RxJSComponent,
  },
  {
    path: 'devextreme',
    component: DevextrameComponent,
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
    children:[
      {
        path: 'res',
        component: DevextrameComponent
      }
    ]
  },
  {
    path: 'RxjsPipe',
    loadChildren: () =>
      import('./rjxs-interval/rjxs-interval.module').then(
        (m) => m.RjxsIntervalModule
      ),
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
