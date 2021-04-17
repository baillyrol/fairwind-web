import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from '../../model/wind-turbine';

@Component({
  selector: 'fairwind-wind-turbine-table',
  templateUrl: './wind-turbine-table.component.html',
  styleUrls: ['./wind-turbine-table.component.scss']
})
export class WindTurbineTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'leds', 'rotation', 'vent', 'puissance', 'action'];
  dataSource = ELEMENT_DATA;

  rotation = 0;
  vent = 0;
  puissance = 0;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    setInterval(() => {
      this.rotation = Math.floor(Math.random() * (10 + 1)) + 20;
      this.vent = Math.floor(Math.random() * (10 + 1)) + 20;
      this.puissance = Math.floor(Math.random() * (10 + 1)) + 20;

    }, 1000);
  }

  navigateToTableData(): void {
    this.router.navigate(['/table-data']);
  }

}
