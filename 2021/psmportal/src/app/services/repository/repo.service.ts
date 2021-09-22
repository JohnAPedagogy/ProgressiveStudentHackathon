import { Injectable } from '@angular/core';
import { PersonRepository } from './concrete/PersonRepository';
import { StitchContext } from './concrete/StitchContext';
import { Person } from '../../models/domain/Person';
import { ResourceRepository } from './concrete/ResourceRepository';
import { Resource } from 'src/app/models/domain/Resource';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  public PersonContext:PersonRepository = new PersonRepository(new StitchContext<Person>("Person"));
  
  public RersourceContext:ResourceRepository = new ResourceRepository(new StitchContext<Resource>("Resource"));

}
