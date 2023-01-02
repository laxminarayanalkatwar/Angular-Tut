import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevextrameComponent } from './devextrame.component';

describe('DevextrameComponent', () => {
  let component: DevextrameComponent;
  let fixture: ComponentFixture<DevextrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevextrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevextrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
