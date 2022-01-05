import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { NgxsModule } from '@ngxs/store';
import { SessionState } from 'src/app/store/session.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin' ;
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

describe('AuthService', () => {
  let service: AuthService;

    // Add the imported module to the imports array in beforeEach 
    beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([SessionState]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot()
      ],
    })
    .compileComponents();
    service = TestBed.inject(AuthService)
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


// beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(AuthService);
  // });
