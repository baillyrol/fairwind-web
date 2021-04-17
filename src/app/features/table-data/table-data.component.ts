import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
    date: Date;
    power: number;
    energy: number;
    rotation: number;
    voltage: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
    {
        date: new Date(),
        power: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        energy: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        rotation: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
        voltage: Math.floor(Math.random() * (20 - 0 + 1)) + 0
    },
];


@Component({
    selector: 'app-table-data',
    templateUrl: './table-data.component.html',
    styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements AfterViewInit {


    displayedColumns = ['date', 'power', 'energy', 'rotation', 'voltage'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }
}
