import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindTurbineTableComponent } from './wind-turbine-table.component';

describe('WindTurbineTableComponent', () => {
  let component: WindTurbineTableComponent;
  let fixture: ComponentFixture<WindTurbineTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindTurbineTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindTurbineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
