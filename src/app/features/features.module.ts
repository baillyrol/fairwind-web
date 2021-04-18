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
import { MapComponent } from './map/map.component';
import { AddressIpComponent, DialogOverviewExampleDialog } from './address-ip/address-ip.component';
import { Average10Component } from './average10/average10.component';
import { ReportComponent } from './report/report.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        TableDataComponent,
        GlobalLineChartComponent,
        LiveChartComponent,
        WindTurbineDetailsComponent,
        GaugeChartComponent,
        MapComponent,
        AddressIpComponent,
        Average10Component,
        ReportComponent,
        ScatterPlotComponent,
        DialogOverviewExampleDialog,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardModule,
        AppRoutingModule,
        BarChartModule,
        MatInputModule,
        FormsModule
    ]
})
export class FeaturesModule {
}
