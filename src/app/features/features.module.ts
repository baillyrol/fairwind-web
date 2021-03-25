import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TableDataComponent } from './table-data/table-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
    declarations: [
        HomeComponent,
        TableDataComponent,
        DashboardComponent,
        LineChartComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class FeaturesModule {
}
