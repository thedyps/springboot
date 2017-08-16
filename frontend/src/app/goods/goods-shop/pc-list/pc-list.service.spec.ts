import { TestBed, inject } from '@angular/core/testing';

import { PcListService } from './pc-list.service';

describe('PcListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PcListService]
    });
  });

  it('should be created', inject([PcListService], (service: PcListService) => {
    expect(service).toBeTruthy();
  }));
});
