import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  InputProps,
  styled,
} from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface iCustomInput extends FormControlProps {
  label: string;
  inputProps?: InputProps;
  warn?: boolean;
  name: string;
}
export const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  marginTop: '5px !important',
  input: {
    padding: '10px !important',
    paddingBottom: '9px !important',
    paddingTop: '8px !important',
  },
  '&:hover': {
    borderColor: theme.palette.grey[200],
    boxShadow: theme.shadows[2],
  },
  '&.Mui-focused': {
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
  },
  '&&.Mui-disabled': {
    backgroundColor: theme.palette.grey[200],
    border: 0,
    boxShadow: theme.shadows[1],
  },
  '&.MuiInputBase-colorWarning': {
    borderColor: theme.palette.warning.main,
  },
}));

export const StyledLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: '1.4rem',
  '&.MuiFormLabel-colorWarning': {
    color: theme.palette.warning.main,
  },
  '&.Mui-focused': {
    color: theme.palette.secondary.main,
  },
}));

const CustomInput = React.forwardRef(
  ({ warn, label, inputProps, name, ...rest }: iCustomInput, ref) => (
    <FormControl
      color={warn ? 'warning' : undefined}
      variant="outlined"
      sx={{ alignItems: 'flex-start', width: '100%' }}
      {...rest}
    >
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        {...inputProps}
        ref={ref}
        disableUnderline
        fullWidth
      />
    </FormControl>
  )
);

export default CustomInput;
