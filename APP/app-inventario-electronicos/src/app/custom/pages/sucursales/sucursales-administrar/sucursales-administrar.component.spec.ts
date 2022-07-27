import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesAdministrarComponent } from './sucursales-administrar.component';

describe('SucursalesAdministrarComponent', () => {
  let component: SucursalesAdministrarComponent;
  let fixture: ComponentFixture<SucursalesAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
