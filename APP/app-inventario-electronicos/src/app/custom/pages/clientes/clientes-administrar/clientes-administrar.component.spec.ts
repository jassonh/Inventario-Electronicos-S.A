import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAdministrarComponent } from './clientes-administrar.component';

describe('ClientesAdministrarComponent', () => {
  let component: ClientesAdministrarComponent;
  let fixture: ComponentFixture<ClientesAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
