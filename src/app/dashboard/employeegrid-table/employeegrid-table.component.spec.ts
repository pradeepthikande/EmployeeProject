import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeegridTableComponent } from './employeegrid-table.component';

describe('EmployeegridTableComponent', () => {
  let component: EmployeegridTableComponent;
  let fixture: ComponentFixture<EmployeegridTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeegridTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeegridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
