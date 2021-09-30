import { TestBed } from '@angular/core/testing';

import { StitchContext } from './StitchContext';
import {Person} from "../../../models/domain/Person"
import { Faker } from '../utilities/seed';


describe('StitchContext', () => {
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
  it('should get a list of type from db should be equal to count fun', async () =>{
    await service.getAll().then(data=> {
      console.log(`${data.length} records `);
      expect(data).toBeDefined();
      service.count().then(data2=> {
        console.log(`${data2} from count `);
        expect(data.length).toBe(data2);
      });
    });
  })
  it('should insert a value of type into db and delete it', async () =>{
    const person = faker.personOne();
    await service.add(person).then(data=> {
      console.log(data);
      expect(data).toBeDefined();
    });
    await service.remove(person).then(data=> {
      console.log(data);
      expect(data).toBeDefined();
      expect(data).toBe(1);
    });
  })
  it('should insert 2 values of type into db and delete them', async () =>{
    const people = faker.personMany(2);
    const ids:number[]=people.map(c=>c.id);
    await service.addRange(...people).then((data:any)=> {
      console.log(data);
      expect(data).toBeDefined();
    });
    await service.removeRange(...ids).then(data=> {
      console.log(data);
      expect(data).toBeDefined();
      expect(data).toBe(2);
    });
  })
});
