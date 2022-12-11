import { CustomTextField } from '@assetto/assetto-components';
import { fireEvent, render, screen } from '@testing-library/react';

it('renders text by the given text', () => {
  const testInput = 'test@gmail.com';
  render(<CustomTextField name="test-input" label="test-input" />);
  fireEvent.change(screen.getByLabelText('test-input'), {
    target: { value: testInput },
  });
  screen.getByDisplayValue(testInput);
});
