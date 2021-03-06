import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { WindTurbineTableComponent } from './components/wind-turbine-table/wind-turbine-table.component';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BarChartModule } from '../bar-chart/bar-chart.module';


@NgModule({
    declarations: [DashboardComponent, WindTurbineTableComponent, MapComponent],
    exports: [
        WindTurbineTableComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        BarChartModule
    ]
})
export class DashboardModule {

}
