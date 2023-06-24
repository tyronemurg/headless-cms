import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleComponent } from './product-single.component';

describe('ProductSingleComponent', () => {
  let component: ProductSingleComponent;
  let fixture: ComponentFixture<ProductSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
