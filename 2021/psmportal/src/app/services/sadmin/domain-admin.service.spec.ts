import { TestBed } from '@angular/core/testing';

import { DomainAdminService } from './domain-admin.service';

describe('DomainAdminService', () => {
  let service: DomainAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
