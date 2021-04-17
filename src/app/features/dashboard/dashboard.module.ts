import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { WindTurbineTableComponent } from './components/wind-turbine-table/wind-turbine-table.component';


@NgModule({
    declarations: [DashboardComponent, WindTurbineTableComponent],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class DashboardModule {

}
