import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import { Chart } from 'highcharts';
import { GaugeOption } from '../wind-turbine-details/wind-turbine-details.component';
HC_more(Highcharts);

@Component({
  selector: 'fairwind-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  @Input() option!: GaugeOption;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  chart!: Chart;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBorderWidth: 0,
        plotShadow: false
      },

      title: {
        text: this.option.title
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },
      // the value axis
      // @ts-ignore
      yAxis: {
        min: 0,
        max: 60,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: this.option.unit
        },
        plotBands: [{
          from: 0,
          to: 20,
          color: '#55BF3B' // green
        }, {
          from: 20,
          to: 40,
          color: '#DDDF0D' // yellow
        }, {
          from: 40,
          to: 60,
          color: '#DF5353' // red
        }]
      },
      series: [{
        name: this.option.title,
        // @ts-ignore
        data: [40],
        tooltip: {
          valueSuffix: this.option.unit
        }
      }]
    };

    setInterval(() => {
      this.chart.series[0].points[0].update(Math.floor(Math.random() * (50 - 40 + 1)) + 40);
    }, 1000);
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart: Chart) => {
    this.chart = chart;
  }

}
