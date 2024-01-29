import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';

describe('YoutubeApiService', () => {
  let service: YoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
