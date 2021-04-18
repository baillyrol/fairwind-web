import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TableDataComponent } from './table-data/table-data.component';
import { LiveChartComponent } from './live-chart/live-chart.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WindTurbineDetailsComponent } from './wind-turbine-details/wind-turbine-details.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { AppRoutingModule } from '../app-routing.module';
import { GlobalLineChartComponent } from './global-line-chart/global-line-chart.component';
import { BarChartModule } from './bar-chart/bar-chart.module';


@NgModule({
    declarations: [
        HomeComponent,
        TableDataComponent,
        GlobalLineChartComponent,
        LiveChartComponent,
        WindTurbineDetailsComponent,
        GaugeChartComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardModule,
        AppRoutingModule,
        BarChartModule
    ]
})
export class FeaturesModule {
}
