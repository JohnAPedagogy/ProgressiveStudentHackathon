import { TestBed } from '@angular/core/testing';

import { GetdatabaseService } from './getdatabase.service';

describe('GetdatabaseService', () => {
  let service: GetdatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should connect to DB server', () =>{
    service.init_db().then(user=> {
      expect(user).toBeDefined();
    });
  })
});

