import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ReviewService } from './review-service';

describe('ReviewService', () => {
  let service: ReviewService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ReviewService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loads reviews from db.json', () => {
    const reviews = [{
      id: 1,
      name: 'John Doe',
      job: 'Great product!',
      image: 'john.jpg',
      text: 'A helpful review.',
    }];

    service.getReviews().subscribe((result) => {
      expect(result).toEqual(reviews);
    });

    const request = httpTestingController.expectOne('/db.json');
    expect(request.request.method).toBe('GET');
    request.flush({ reviews });
  });
});
