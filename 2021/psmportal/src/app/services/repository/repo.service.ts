import { Pathway } from 'src/app/models/domain/Pathway';
import { PeopleRole } from './../../models/domain/PeopleRole';
import { TeachingClass } from './../../models/domain/TeachingClass';
import { Injectable } from '@angular/core';
import { PersonRepository } from './concrete/PersonRepository';
import { StitchContext } from './concrete/StitchContext';
import { Person } from '../../models/domain/Person';
import { ResourceRepository } from './concrete/ResourceRepository';
import { Resource } from 'src/app/models/domain/Resource';
import { TeachingClassRepository } from './concrete/TeachingClassRepository';
import { PeopleRoleRepository } from './concrete/PeopleRoleRepository';
import { PathwayRepository } from './concrete/PathwayRepository';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  public PersonContext:PersonRepository = new PersonRepository(new StitchContext<Person>("Person"));

  public PathwayContext:PathwayRepository = new PathwayRepository(new StitchContext<Pathway>("Pathway"));

  public TeachingClassContext:TeachingClassRepository = new TeachingClassRepository(new StitchContext<TeachingClass>("TeachingClass"));

  public PeopleRoleContext:PeopleRoleRepository = new PeopleRoleRepository(new StitchContext<PeopleRole>("PeopleRole"));

  public RersourceContext:ResourceRepository = new ResourceRepository(new StitchContext<Resource>("Resource")); 





}
