import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
    date: Date;
    power: number;
    energy: number;
    rotation: number;
    voltage: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
    { date: new Date(), power: 10.10, energy: 20.20, rotation: 11, voltage: 20.22 },
];


@Component({
    selector: 'app-table-data',
    templateUrl: './table-data.component.html',
    styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {

    displayedColumns = ['date', 'power', 'energy', 'rotation', 'voltage'];
    dataSource = ELEMENT_DATA;
}
