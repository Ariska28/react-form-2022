import NewReviewForn from './NewReviewForm';
import { render, screen } from '@testing-library/react';

test("review form should be rendered", ()=> {
  render(NewReviewForn);
  // const userInputEl = screen.getByPlaceholderText(/username/i);
  // expect(userInputEl).toBeInTheDocument();
})