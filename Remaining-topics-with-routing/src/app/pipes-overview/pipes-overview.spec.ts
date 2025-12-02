import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOverview } from './pipes-overview';

describe('PipesOverview', () => {
  let component: PipesOverview;
  let fixture: ComponentFixture<PipesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
