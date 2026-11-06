import { Routes } from '@angular/router';
import { ReviewsPage } from './reviews-page';

export const routes: Routes = [
  { path: 'reviews', component: ReviewsPage },
  { path: '', redirectTo: 'reviews', pathMatch: 'full' },
  { path: '**', redirectTo: 'reviews' },
];
