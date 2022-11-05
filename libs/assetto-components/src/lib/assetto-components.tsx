import { Button, styled } from '@mui/material';
import { CustomButton } from '..';


/* eslint-disable-next-line */
export interface AssettoComponentsProps {}

const StyledButton = styled(Button)(({theme})=>{
  return null
})

export function AssettoComponents(props: AssettoComponentsProps) {
  return (
    <StyledButton />
  );
}

export default AssettoComponents;
