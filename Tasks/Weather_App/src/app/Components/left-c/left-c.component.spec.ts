import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCComponent } from './left-c.component';

describe('LeftCComponent', () => {
  let component: LeftCComponent;
  let fixture: ComponentFixture<LeftCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftCComponent]
    });
    fixture = TestBed.createComponent(LeftCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
