import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TableDataComponent } from './table-data/table-data.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LiveChartComponent } from './live-chart/live-chart.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WindTurbineDetailsComponent } from './wind-turbine-details/wind-turbine-details.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';


@NgModule({
    declarations: [
        HomeComponent,
        TableDataComponent,
        LineChartComponent,
        BarChartComponent,
        LiveChartComponent,
        WindTurbineDetailsComponent,
        GaugeChartComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardModule,
    ]
})
export class FeaturesModule {
}
