import { TestBed } from '@angular/core/testing';

import { DbMensajesService } from './db-mensajes.service';

describe('DbMensajesService', () => {
  let service: DbMensajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbMensajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
