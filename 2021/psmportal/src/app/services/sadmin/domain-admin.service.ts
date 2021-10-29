import { Injectable } from '@angular/core';
import { RepoService } from '../repository/repo.service';

@Injectable({
  providedIn: 'root'
})
export class DomainAdminService {

  constructor(private repository:RepoService) { }
}
