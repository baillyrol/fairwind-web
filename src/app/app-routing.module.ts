import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TableDataComponent } from './features/table-data/table-data.component';
import { LineChartComponent } from './features/line-chart/line-chart.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'table-data', component: TableDataComponent },
    { path: 'line-chart', component: LineChartComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
