import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowEmpComponent } from './shadow-emp.component';

describe('ShadowEmpComponent', () => {
  let component: ShadowEmpComponent;
  let fixture: ComponentFixture<ShadowEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
