import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsecsvAngularPluginModule } from '@usecsv/angular';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    UsecsvAngularPluginModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
