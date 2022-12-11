import { CustomDialog } from '@assetto/assetto-components';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';
import theme from 'libs/custom-theme/src/lib/custom-theme';

/* it('triggers the both handler functions when the action buttons are clicked', () => {
  const confirmMockFn = jest.fn();
  const cancelMockFn = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <CustomDialog
        title="test-dialog"
        body="This is a testing dialog body"
        onConfirm={confirmMockFn}
        onCancel={cancelMockFn}
        open={true}
      />
    </ThemeProvider>
  );
  fireEvent.click(screen.getByText(/confirm/i));
  fireEvent.click(screen.getByText(/cancel/i));
  expect(confirmMockFn.mock.calls.length).toBe(1);
  expect(cancelMockFn.mock.calls.length).toBe(1);
}); */
