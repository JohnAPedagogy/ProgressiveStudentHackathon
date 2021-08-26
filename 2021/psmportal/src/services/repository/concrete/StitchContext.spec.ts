import { TestBed } from '@angular/core/testing';

import { StitchContext } from './StitchContext';
import {Person} from "../../../models/domain/Person"


fdescribe('StitchContext', () => {
  let service: StitchContext<Person>;

  beforeEach(() => {
    service = new StitchContext<Person>();
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
