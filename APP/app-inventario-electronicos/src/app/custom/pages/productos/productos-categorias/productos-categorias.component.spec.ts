import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCategoriasComponent } from './productos-categorias.component';

describe('ProductosCategoriasComponent', () => {
  let component: ProductosCategoriasComponent;
  let fixture: ComponentFixture<ProductosCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
