import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-streaming';


@Component({
    selector: 'fairwind-global-line-chart',
    templateUrl: './global-line-chart.component.html',
    styleUrls: ['./global-line-chart.component.scss']
})
export class GlobalLineChartComponent implements AfterViewInit {

    @Input()// @ts-ignore
    canvasId = 'canvas';

    chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
    color = Chart.helpers.color;

    config = {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Consigne vitesse [RPM]',
                    backgroundColor: this.color(this.chartColors.blue).alpha(0.5).rgbString(),
                    borderColor: this.chartColors.blue,
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    data: []
                },
                {
                    label: 'Vitesse de rotation [RPM]',
                    backgroundColor: this.color(this.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: this.chartColors.red,
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    data: []
                },
                {
                    label: 'Couple [RPM]',
                    backgroundColor: this.color(this.chartColors.green).alpha(0.5).rgbString(),
                    borderColor: this.chartColors.green,
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    data: []
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Line chart (hotizontal scroll) sample'
            },
            scales: {
                xAxes: [{
                    type: 'realtime',
                    realtime: {
                        duration: 20000,
                        refresh: 2000,
                        delay: 2000,
                        onRefresh: (chart: any) => {
                            chart.config.data.datasets.forEach((dataset: any) => {
                                dataset.data.push({
                                    x: Date.now(),
                                    y: (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 50)
                                });
                            });
                        }
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'value'
                    }
                }]
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                streaming: {            // per-chart option
                    frameRate: 30      // chart is drawn 30 times every second
                }
            }
        }
    };

    constructor() {
    }

    ngAfterViewInit(): void {
        console.log(this.canvasId);
        // @ts-ignore
        this.chart = new Chart(this.canvasId, this.config);
    }

}
