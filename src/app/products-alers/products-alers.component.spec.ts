import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAlersComponent } from './products-alers.component';

describe('ProductsAlersComponent', () => {
  let component: ProductsAlersComponent;
  let fixture: ComponentFixture<ProductsAlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAlersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
