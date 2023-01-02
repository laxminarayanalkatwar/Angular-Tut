import { TestBed } from '@angular/core/testing';

import { ServiceComponentService } from './service-component.service';

describe('ServiceComponentService', () => {
  let service: ServiceComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
