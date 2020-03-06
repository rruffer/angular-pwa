import { TestBed } from '@angular/core/testing';

import { MarcaCarroService } from './marca-carro.service';

describe('MarcaCarroService', () => {
  let service: MarcaCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
