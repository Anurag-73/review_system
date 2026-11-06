import { Component, OnInit, inject, signal } from '@angular/core';
import { Review, ReviewService } from './review-service';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage implements OnInit {
  private readonly reviewService = inject(ReviewService);

  reviews = signal<Review[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe({
      next: (reviews) => {
        this.reviews.set(reviews);
        this.isLoading.set(false);
      },
      error: (error: unknown) => {
        console.error('Unable to load reviews.', error);
        this.errorMessage.set('Reviews could not be loaded. Please try again later.');
        this.isLoading.set(false);
      },
    });
  }
}
