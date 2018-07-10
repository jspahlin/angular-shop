import { TestBed, inject } from '@angular/core/testing';

import { SelectorOptionsService } from './selector-options.service';

describe('SelectorOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectorOptionsService]
    });
  });

  it('should be created', inject([SelectorOptionsService], (service: SelectorOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
