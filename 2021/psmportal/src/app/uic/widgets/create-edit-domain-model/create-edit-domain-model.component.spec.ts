import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDomainModelComponent } from './create-edit-domain-model.component';

describe('CreateEditDomainModelComponent', () => {
  let component: CreateEditDomainModelComponent;
  let fixture: ComponentFixture<CreateEditDomainModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditDomainModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditDomainModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
