import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresAdministrarComponent } from './proveedores-administrar.component';

describe('ProveedoresAdministrarComponent', () => {
  let component: ProveedoresAdministrarComponent;
  let fixture: ComponentFixture<ProveedoresAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedoresAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
