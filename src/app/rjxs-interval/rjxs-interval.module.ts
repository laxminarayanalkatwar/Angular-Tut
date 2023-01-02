import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RjxsIntervalComponent } from './rjxs-interval.component';
import { Routes, RouterModule } from '@angular/router';
const routes  : Routes= [
  {
    path: '',
   component : RjxsIntervalComponent
  },
]
@NgModule({
  declarations: [RjxsIntervalComponent],
  imports: [CommonModule,
   RouterModule.forChild(routes)],
  // exports: [RjxsIntervalComponent],
})
export class RjxsIntervalModule {}
