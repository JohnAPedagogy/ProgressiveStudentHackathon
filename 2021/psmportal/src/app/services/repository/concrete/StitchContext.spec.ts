import { TestBed } from '@angular/core/testing';

import { StitchContext } from './StitchContext';
import {Person} from "../../../models/domain/Person"
import { Faker } from '../utilities/seed';


fdescribe('StitchContext', () => {
  let service: StitchContext<Person>;
  let faker = new Faker();

  beforeEach(() => {
    service = new StitchContext<Person>('Person');
    faker = new Faker();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(faker).toBeTruthy();
  });
  // it('should connect to DB server', async () =>{
  //   await service.init_db().then(user=> {
  //     expect(user).toBeDefined();
  //   });
  // })
  it('should get the type from db', async () =>{
    await service.get(2).then(data=> {
      console.log(data);
      expect(data).toBeDefined();
    });
  })
  it('should get a list of type from db', async () =>{
    await service.getAll().then(data=> {
      console.log(`${data.length} records `);
      expect(data).toBeDefined();
    });
  })
  it('should insert a value of type into db', async () =>{
    const person = faker.personOne();
    await service.add(person).then(data=> {
      console.log(data);
      expect(data).toBeDefined();
    });
  })
});
