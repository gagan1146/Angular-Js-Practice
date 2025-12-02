import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildData } from './parent-to-child-data';

describe('ParentToChildData', () => {
  let component: ParentToChildData;
  let fixture: ComponentFixture<ParentToChildData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentToChildData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentToChildData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
