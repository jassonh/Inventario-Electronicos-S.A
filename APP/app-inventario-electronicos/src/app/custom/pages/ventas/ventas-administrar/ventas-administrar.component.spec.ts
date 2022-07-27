import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAdministrarComponent } from './ventas-administrar.component';

describe('VentasAdministrarComponent', () => {
  let component: VentasAdministrarComponent;
  let fixture: ComponentFixture<VentasAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
