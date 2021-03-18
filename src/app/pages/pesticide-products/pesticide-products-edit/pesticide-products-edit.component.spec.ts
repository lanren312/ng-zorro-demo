import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideProductsEditComponent } from './pesticide-products-edit.component';

describe('PesticideProductsEditComponent', () => {
  let component: PesticideProductsEditComponent;
  let fixture: ComponentFixture<PesticideProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesticideProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesticideProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
