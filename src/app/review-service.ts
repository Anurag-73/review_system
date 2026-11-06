import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Review {
    id: number;
    name: string;
    job: string;
    image: string;
    text: string;

}

interface ReviewsResponse {
    reviews: Review[];
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
    private readonly http = inject(HttpClient);

    getReviews(): Observable<Review[]> {
        return this.http.get<ReviewsResponse>('/db.json').pipe(
            map((response) => response.reviews),
        );
    }
}
