import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundChanger } from './background-changer';

describe('BackgroundChanger', () => {
  let component: BackgroundChanger;
  let fixture: ComponentFixture<BackgroundChanger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundChanger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundChanger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
