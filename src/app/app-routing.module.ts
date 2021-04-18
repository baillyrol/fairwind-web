import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './features/table-data/table-data.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { WindTurbineDetailsComponent } from './features/wind-turbine-details/wind-turbine-details.component';
import { GlobalLineChartComponent } from './features/global-line-chart/global-line-chart.component';
import { MapComponent } from './features/map/map.component';

const routes: Routes = [
    { path: 'detail', component: WindTurbineDetailsComponent },
    { path: 'table-data', component: TableDataComponent },
    { path: 'line-chart', component: GlobalLineChartComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'map', component: MapComponent },
    { path: '**', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
