import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TableDataComponent } from './table-data/table-data.component';


@NgModule({
    declarations: [HomeComponent, TableDataComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class FeaturesModule {
}
