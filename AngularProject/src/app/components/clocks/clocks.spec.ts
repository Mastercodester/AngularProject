import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clocks } from './clocks';

describe('Clocks', () => {
  let component: Clocks;
  let fixture: ComponentFixture<Clocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
