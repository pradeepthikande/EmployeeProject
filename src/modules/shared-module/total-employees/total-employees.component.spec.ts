import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEmployeesComponent } from './total-employees.component';

describe('TotalEmployeesComponent', () => {
  let component: TotalEmployeesComponent;
  let fixture: ComponentFixture<TotalEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
