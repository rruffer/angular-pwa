import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeguroComponent } from './listar-seguro.component';

describe('ListarSeguroComponent', () => {
  let component: ListarSeguroComponent;
  let fixture: ComponentFixture<ListarSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
