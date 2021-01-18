import * as React from 'react';
import { LayoutBox, Category, QuizForm } from '@view-components/Quiz';

const Quiz = () => (
  <LayoutBox categoryComponent={<Category />} formComponent={<QuizForm />} />
);

export default Quiz;
