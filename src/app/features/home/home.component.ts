import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface WindTurbine {
    id: number;
    name: string;
}

const ELEMENT_DATA: WindTurbine[] = [
    { id: 1, name: 'Turbine 1' },
    { id: 2, name: 'Turbine 2' },
    { id: 3, name: 'Turbine 3' },
    { id: 4, name: 'Turbine 4' },
    { id: 5, name: 'Turbine 5' },
    { id: 6, name: 'Turbine 6' },
    { id: 7, name: 'Turbine 7' },
];

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'action'];
    dataSource = ELEMENT_DATA;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateToTableData(): void {
        this.router.navigate(['/table-data']);
    }
}
