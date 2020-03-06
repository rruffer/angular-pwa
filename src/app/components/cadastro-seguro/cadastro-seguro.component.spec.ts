import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSeguroComponent } from './cadastro-seguro.component';

describe('CadastroSeguroComponent', () => {
  let component: CadastroSeguroComponent;
  let fixture: ComponentFixture<CadastroSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
