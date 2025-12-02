import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsingNg } from './form-using-ng';

describe('FormUsingNg', () => {
  let component: FormUsingNg;
  let fixture: ComponentFixture<FormUsingNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUsingNg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUsingNg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
