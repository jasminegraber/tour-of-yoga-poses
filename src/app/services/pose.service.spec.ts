import { TestBed } from '@angular/core/testing';

import { PoseService } from './pose.service';
import { HttpClientModule } from '@angular/common/http';

describe('PoseService', () => {
  let service: PoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
