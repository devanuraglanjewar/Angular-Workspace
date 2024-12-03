import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCComponent } from './right-c.component';

describe('RightCComponent', () => {
  let component: RightCComponent;
  let fixture: ComponentFixture<RightCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightCComponent]
    });
    fixture = TestBed.createComponent(RightCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
