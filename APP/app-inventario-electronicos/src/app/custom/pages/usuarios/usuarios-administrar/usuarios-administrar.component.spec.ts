import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAdministrarComponent } from './usuarios-administrar.component';

describe('UsuariosAdministrarComponent', () => {
  let component: UsuariosAdministrarComponent;
  let fixture: ComponentFixture<UsuariosAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
