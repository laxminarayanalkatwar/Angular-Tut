import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjxsIntervalComponent } from './rjxs-interval.component';

describe('RjxsIntervalComponent', () => {
  let component: RjxsIntervalComponent;
  let fixture: ComponentFixture<RjxsIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RjxsIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RjxsIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
