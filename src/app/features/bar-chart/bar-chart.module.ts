import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
    declarations: [BarChartComponent],
    imports: [
        CommonModule,
        HighchartsChartModule,
    ],
    exports: [
        BarChartComponent
    ]
})
export class BarChartModule {
}
