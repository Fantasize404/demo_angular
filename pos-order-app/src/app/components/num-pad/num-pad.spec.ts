import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPad } from './num-pad';

describe('NumPad', () => {
  let component: NumPad;
  let fixture: ComponentFixture<NumPad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumPad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumPad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
