import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AssettoComponentsProps {}

const StyledAssettoComponents = styled.div`
  color: pink;
`;

export function AssettoComponents(props: AssettoComponentsProps) {
  return (
    <StyledAssettoComponents>
      <h1>Welcome to AssettoComponents!</h1>
    </StyledAssettoComponents>
  );
}

export default AssettoComponents;
