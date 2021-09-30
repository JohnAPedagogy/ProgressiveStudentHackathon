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
import { GroupRepository } from './concrete/GroupRepository';
import { Group } from 'src/app/models/domain/Group';
import { PathwayModuleRepository } from './concrete/PathwayModuleRepository';
import { PathwayModule } from 'src/app/models/domain/PathwayModule';
import { ModuleRepository } from './concrete/ModuleRepository';
import { Module } from 'src/app/models/domain/Module';
import { TaskRepository } from './concrete/TaskRepository';
import {Task} from 'src/app/models/domain/Task'
import { LoginRole } from 'src/app/models/domain/LoginRole';
import { LoginRoleRepository } from './concrete/LoginRoleRepository';
import { Batch } from 'src/app/models/domain/Batch';
import { BatchRepository } from './concrete/BatchRepository';
import { Progression } from 'src/app/models/domain/Progression';
import { ProgressionRepository } from './concrete/ProgressionRepository';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  public PersonContext:PersonRepository = new PersonRepository(new StitchContext<Person>("Person"));

  public PathwayContext:PathwayRepository = new PathwayRepository(new StitchContext<Pathway>("Pathway"));

  public TeachingClassContext:TeachingClassRepository = new TeachingClassRepository(new StitchContext<TeachingClass>("TeachingClass"));

  public PeopleRoleContext:PeopleRoleRepository = new PeopleRoleRepository(new StitchContext<PeopleRole>("PeopleRole"));

  public ResourceContext:ResourceRepository = new ResourceRepository(new StitchContext<Resource>("Resource")); 

  public GroupContext:GroupRepository = new GroupRepository(new StitchContext<Group>("Group")); 

  public PathwayModuleContext:PathwayModuleRepository = new PathwayModuleRepository(new StitchContext<PathwayModule>("PathwayModule")); 

  public ModuleContext:ModuleRepository = new ModuleRepository(new StitchContext<Module>("Module")); 

  public TaskContext:TaskRepository = new TaskRepository(new StitchContext<Task>("Task"));

  public LoginRoleContext:LoginRoleRepository = new LoginRoleRepository(new StitchContext<LoginRole>("LoginRole"));

  public BatchContext:BatchRepository = new BatchRepository(new StitchContext<Batch>("Batch"));

  public ProgressionContext:ProgressionRepository = new ProgressionRepository(new StitchContext<Progression>("Progression"));
  






}
