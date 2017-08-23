import { TestBed, inject } from '@angular/core/testing';

import { PcListResolverService } from './pc-list-resolver.service';

describe('PcListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PcListResolverService]
    });
  });

  it('should be created', inject([PcListResolverService], (service: PcListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
