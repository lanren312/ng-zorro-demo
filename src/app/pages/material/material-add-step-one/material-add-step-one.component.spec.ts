import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAddStepOneComponent } from './material-add-step-one.component';

describe('MaterialAddStepOneComponent', () => {
  let component: MaterialAddStepOneComponent;
  let fixture: ComponentFixture<MaterialAddStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAddStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAddStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
