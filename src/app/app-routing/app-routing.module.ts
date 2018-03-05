import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RallComponent } from '../rall/rall.component';
import { RawwComponent } from '../raww/raww.component';
import { RfunnyComponent } from '../rfunny/rfunny.component';

const routes: Routes = [
  { path: '', redirectTo: '/r/all', pathMatch: 'full' },
  { path: 'r/all', component: RallComponent },
  { path: 'r/aww', component: RawwComponent },
  { path: 'r/funny', component: RfunnyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
