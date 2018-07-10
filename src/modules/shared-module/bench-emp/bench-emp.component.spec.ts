import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchEmpComponent } from './bench-emp.component';

describe('BenchEmpComponent', () => {
  let component: BenchEmpComponent;
  let fixture: ComponentFixture<BenchEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
