import { TestBed, inject } from '@angular/core/testing';

import { PcDetailService } from './pc-detail.service';

describe('PcDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PcDetailService]
    });
  });

  it('should be created', inject([PcDetailService], (service: PcDetailService) => {
    expect(service).toBeTruthy();
  }));
});
