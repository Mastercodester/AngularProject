import { ComponentFixture, TestBed } from '@angular/core/testing';

import { appclocks } from './clocks';

describe('Clocks', () => {
  let component: appclocks;
  let fixture: ComponentFixture<appclocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [appclocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(appclocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
