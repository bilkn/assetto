import { render } from '@testing-library/react';

import AssettoComponents from './assetto-components';

describe('AssettoComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AssettoComponents />);
    expect(baseElement).toBeTruthy();
  });
});
