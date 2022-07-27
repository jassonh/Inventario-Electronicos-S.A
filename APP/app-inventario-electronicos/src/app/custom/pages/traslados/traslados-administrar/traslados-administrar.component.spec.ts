import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladosAdministrarComponent } from './traslados-administrar.component';

describe('TrasladosAdministrarComponent', () => {
  let component: TrasladosAdministrarComponent;
  let fixture: ComponentFixture<TrasladosAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladosAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladosAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
