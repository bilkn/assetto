import { render, screen } from '@testing-library/react';
import mockAssetData from '../../mocks/mockAssetData';
import AssetCard from './AssetCard';

beforeEach(() => {
  render(<AssetCard asset={mockAssetData} />);
});
describe('Asset card content', () => {
  it('renders asset name', () => {
    screen.getByText(/Bitcoin/);
  });
  it('renders amount', () => {
    screen.getByText(/0\.45\s*BTC/);
  });
  it('renders value', () => {
    screen.getByText(/\$\s*2500/);
  });
  it('renders percentage', () => {
    screen.getByText(/\+\s*5,56%/);
  });
});
