import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  InputProps,
  styled,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface iCustomInput extends FormControlProps {
  label: string;
  inputProps?: InputProps;
  warn?: boolean;
}
const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  marginTop: '5px !important',
  input: {
    padding: '5px',
    paddingBottom: '9px',
    paddingTop: '8px',
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

const StyledLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-colorWarning': {
    color: theme.palette.warning.main,
  },
  '&.Mui-focused': {
    color: theme.palette.secondary.main,
  },
}));

function CustomInput({ warn, label, inputProps, ...rest }: iCustomInput) {
  return (
    <FormControl
      color={warn ? 'warning' : undefined}
      variant="outlined"
      {...rest}
    >
      <StyledLabel sx={{ fontSize: '1.4rem' }}>{label}</StyledLabel>
      <StyledInput {...inputProps} disableUnderline />
    </FormControl>
  );
}

export default CustomInput;
