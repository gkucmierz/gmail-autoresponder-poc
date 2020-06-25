import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { AdditionalComponent } from './additional/additional.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'additional', component: AdditionalComponent },
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
