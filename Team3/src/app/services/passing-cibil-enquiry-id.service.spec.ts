import { TestBed } from '@angular/core/testing';

import { PassingCibilEnquiryIdService } from './passing-cibil-enquiry-id.service';

describe('PassingCibilEnquiryIdService', () => {
  let service: PassingCibilEnquiryIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassingCibilEnquiryIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
