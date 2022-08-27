import { TestBed } from '@angular/core/testing';

import { BahLibraryService } from './bah-library.service';

describe('BahLibraryService', () => {
  let service: BahLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BahLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
