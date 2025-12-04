import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCustomPipe } from './use-custom-pipe';

describe('UseCustomPipe', () => {
  let component: UseCustomPipe;
  let fixture: ComponentFixture<UseCustomPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseCustomPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCustomPipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
