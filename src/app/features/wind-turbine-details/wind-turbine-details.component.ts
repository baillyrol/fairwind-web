import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import { Chart } from 'highcharts';

HC_more(Highcharts);

export interface GaugeOption {
    title: string;
    unit: string;
    min: number;
    max: number;
}


@Component({
    selector: 'fairwind-wind-turbine-details',
    templateUrl: './wind-turbine-details.component.html',
    styleUrls: ['./wind-turbine-details.component.scss']
})
export class WindTurbineDetailsComponent implements OnInit {

    MOTOR: GaugeOption = {
        title: 'Température moteur',
        unit: '°C',
        min: -10,
        max: 150,
    };

    BUS_DC: GaugeOption = {
        title: 'Tension Bus DC',
        unit: 'V',
        min: 500,
        max: 700,
    };

    ROTATION: GaugeOption = {
        title: 'Vitesse de rotation',
        unit: 'RPM',
        min: 0,
        max: 60,
    };

    WIND: GaugeOption = {
        title: 'Vitesse du vent',
        unit: 'm/s',
        min: 0,
        max: 25,
    };

    PUISSANCE: GaugeOption = {
        title: 'Puissance',
        unit: 'kW',
        min: 0,
        max: 30,
    };

    COUPLE: GaugeOption = {
        title: 'Couple',
        unit: 'Nm',
        min: 0,
        max: 5000,
    };

    COURANT: GaugeOption = {
        title: 'Courant',
        unit: 'A',
        min: 0,
        max: 60,
    };

    TENSION_RESEAU: GaugeOption = {
        title: 'Tension réseau',
        unit: 'V',
        min: 0,
        max: 500,
    };

    Highcharts: typeof Highcharts = Highcharts;
    chartOptions!: Highcharts.Options;
    chart!: Chart;

    constructor() {
    }

    ngOnInit(): void {
        // @ts-ignore
        // @ts-ignore
        this.chartOptions =   {

            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },

            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },

            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2017'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation',
                // @ts-ignore
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: 'Manufacturing',
                // @ts-ignore
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Sales & Distribution',
                // @ts-ignore
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: 'Project Development',
                // @ts-ignore
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: 'Other',
                // @ts-ignore
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        };
    }

    chartCallback: Highcharts.ChartCallbackFunction = (chart: Chart) => {
        this.chart = chart;
    }

}
