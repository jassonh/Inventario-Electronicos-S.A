import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosAdministrarComponent } from './ingresos-administrar.component';

describe('IngresosAdministrarComponent', () => {
  let component: IngresosAdministrarComponent;
  let fixture: ComponentFixture<IngresosAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
