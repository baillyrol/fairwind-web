import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        ChartsModule,
        HighchartsChartModule,
        MatSortModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        ChartsModule,
        HighchartsChartModule,
        MatSortModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTabsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule
    ]
})
export class SharedModule {
}
