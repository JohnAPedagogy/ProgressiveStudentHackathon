import { Injectable } from '@angular/core';
import { PersonRepository } from './concrete/PersonRepository';
import { StitchContext } from './concrete/StitchContext';
import { Person } from '../../models/domain/Person';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  public PersonContext:PersonRepository = new PersonRepository(new StitchContext<Person>("Person"));

}
