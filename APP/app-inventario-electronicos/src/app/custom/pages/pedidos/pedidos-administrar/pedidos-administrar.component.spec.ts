import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdministrarComponent } from './pedidos-administrar.component';

describe('PedidosAdministrarComponent', () => {
  let component: PedidosAdministrarComponent;
  let fixture: ComponentFixture<PedidosAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
