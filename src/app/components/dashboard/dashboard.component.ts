import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  departments: any;
  allDepartment: number = 0;
  pagination: number = 1;
  
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.initialLoad();
  }

  initialLoad(): void {
    this.dashboardService.getDepartmentList(this.pagination, 10).subscribe((res: any) => {
      this.departments = res.data.rows;
      this.allDepartment = res.data.count;
    });
  }

  renderPage(event: number) {
    this.pagination = event;
    this.initialLoad();
  }

  onDataCallback(data: {}) {
    console.log({ data });
  }
}
