import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAddStepTwoComponent } from './material-add-step-two.component';

describe('MaterialAddStepTwoComponent', () => {
  let component: MaterialAddStepTwoComponent;
  let fixture: ComponentFixture<MaterialAddStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAddStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAddStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
