import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcokForum } from './clcok-forum';

describe('ClcokForum', () => {
  let component: ClcokForum;
  let fixture: ComponentFixture<ClcokForum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcokForum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcokForum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
