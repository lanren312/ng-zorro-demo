import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideProductsListComponent } from './pesticide-products-list.component';

describe('PesticideProductsListComponent', () => {
  let component: PesticideProductsListComponent;
  let fixture: ComponentFixture<PesticideProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesticideProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesticideProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
