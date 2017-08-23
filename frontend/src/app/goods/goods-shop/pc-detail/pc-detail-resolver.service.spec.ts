import { TestBed, inject } from '@angular/core/testing';

import { PcDetailResolverService } from './pc-detail-resolver.service';

describe('PcDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PcDetailResolverService]
    });
  });

  it('should be created', inject([PcDetailResolverService], (service: PcDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
