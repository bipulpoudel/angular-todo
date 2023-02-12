import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import IAnalytics from 'src/app/interfaces/IAnalytics';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  id: string = '';
  analytics: IAnalytics[] = [];
  data: number[] = [0, 0, 0, 0, 0];
  total: number = 0;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['France', 'Nepali', 'Hindi', 'English', 'Italy', 'Spain'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0],
        label: 'No of translation done for language',
      },
    ],
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getAnalytics();
  }

  ngOnChanges(): void {
    this.getAnalytics();
  }

  getAnalytics() {
    this.adminService.getAnalytics(this.id).subscribe((res: any) => {
      const { data } = res;
      this.analytics = data.analytics;

      let changedData = [0, 0, 0, 0, 0, 0];

      this.analytics.forEach((item) => {
        this.total = this.total + 1;

        if (item.language === 'fr') {
          changedData[0] = changedData[0] + 1;
        } else if (item.language === 'ne') {
          changedData[1] = changedData[1] + 1;
        } else if (item.language === 'hi') {
          changedData[2] = changedData[2] + 1;
        } else if (item.language === 'en') {
          changedData[3] = changedData[3] + 1;
        } else if (item.language === 'it') {
          changedData[4] = changedData[4] + 1;
        } else if (item.language === 'es') {
          changedData[5] = changedData[5] + 1;
        }
      });

      this.barChartData = {
        labels: ['France', 'Nepali', 'Hindi', 'English', 'Italy', 'Spain'],
        datasets: [
          {
            data: changedData,
            label: 'No of translation done for language',
          },
        ],
      };
    });
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
