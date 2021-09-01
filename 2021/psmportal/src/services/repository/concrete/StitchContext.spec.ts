import { TestBed } from '@angular/core/testing';

import { StitchContext } from './StitchContext';
import {Person} from "../../../models/domain/Person"


describe('StitchContext', () => {
  let service: StitchContext<Person>;

  beforeEach(() => {
    service = new StitchContext<Person>('Person');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should connect to DB server', async () =>{
  //   await service.init_db().then(user=> {
  //     expect(user).toBeDefined();
  //   });
  // })
  it('should get the type from db', async () =>{
    await service.get(2).then(data=> {
      console.dir(data);
      expect(data).toBeDefined();
    });
  })
  it('should get a list of type from db', async () =>{
    await service.getAll().then(data=> {
      console.dir(data);
      expect(data).toBeDefined();
    });
  })
});