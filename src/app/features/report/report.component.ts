import { Component, OnInit } from '@angular/core';
import { WindTurbine } from '../dashboard/model/wind-turbine';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import { GaugeOption } from '../wind-turbine-details/wind-turbine-details.component';

@Component({
    selector: 'fairwind-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    Highcharts: typeof Highcharts = Highcharts;
    chartOptions!: Highcharts.Options;
    chart!: Chart;

    IRM: GaugeOption = {
        title: 'Relevé mensuel IRM',
        unit: 'V',
        min: 0,
        max: 500,
    };

    ELEMENT_DATA: WindTurbine[] = [
        { id: 1, name: 'Turbine 1' },
        { id: 2, name: 'Turbine 2' },
        { id: 3, name: 'Turbine 3' },
        { id: 4, name: 'Turbine 4' },
        { id: 5, name: 'Turbine 5' },
        { id: 6, name: 'Turbine 6' },
        { id: 7, name: 'Turbine 7' },
        { id: 8, name: 'Turbine 8' },
        { id: 9, name: 'Turbine 9' },
        { id: 10, name: 'Turbine 10' },
        { id: 11, name: 'Turbine 11' },
        { id: 12, name: 'Turbine 12' },
        { id: 13, name: 'Turbine 13' },
        { id: 14, name: 'Turbine 14' },
        { id: 15, name: 'Turbine 15' },
        { id: 16, name: 'Turbine 16' },
        { id: 17, name: 'Turbine 17' },
        { id: 18, name: 'Turbine 18' },
        { id: 19, name: 'Turbine 19' },
        { id: 20, name: 'Turbine 20' },
        { id: 21, name: 'Turbine 21' },
        { id: 22, name: 'Turbine 22' },
        { id: 23, name: 'Turbine 23' },
        { id: 24, name: 'Turbine 24' },

    ];

    constructor() {
    }

    ngOnInit(): void {
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Production journalière'
            },
            subtitle: {
                text: 'sous titre'
            },
            xAxis: {
                categories: [
                    '01/10', '02/10', '03/10', '04/10', '05/10', '06/10', '07/10', '08/10',
                    '09/10', '10/10', '11/10', '12/10', '13/10', '14/10', '15/10', '16/10', '17/10',
                    '18/10', '19/10', '20/10', '21/10', '22/10', '23/10', '24/10', '25/10',
                    '26/10', '27/10', '28/10', '29/10', '30/10', '31/10',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Energie produite (kWh)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Production',
                // @ts-ignore
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4, 105.0, 104.3, 91.2]

            }, {
                name: 'Vent',
                // @ts-ignore
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3, 83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3, 95.6, 54.4, 95.6, 54.4, 71.5, 106.4, 129.2]

            }]
        };
    }

    chartCallback: Highcharts.ChartCallbackFunction = (chart: Chart) => {
        this.chart = chart;
    };
}
