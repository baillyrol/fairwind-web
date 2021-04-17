import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';

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

    constructor() {
    }

    ngOnInit(): void {

    }

}
