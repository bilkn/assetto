import { Autocomplete, AutocompleteProps, FormControl } from '@mui/material';
import { StyledInput, StyledLabel } from '../CustomInput';

const mockData = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

interface IOptions {
  label: string;
  year: number;
}
type Props<T> = {
  autoCompleteProps?: AutocompleteProps<T, undefined, undefined, undefined>;
  label: string;
  loading?: boolean;
};

function AutoCompleteSearchbox(props: Props<IOptions>) {
  const { label } = props;

  return (
    <Autocomplete
      options={mockData}
      renderInput={(params) => (
        <FormControl sx={{ width: '100%' }}>
          <StyledLabel>{label}</StyledLabel>
          <StyledInput
            inputProps={params.inputProps}
            ref={params.InputProps.ref}
            disableUnderline
            fullWidth
          />
        </FormControl>
      )}
      {...props}
    />
  );
}

export default AutoCompleteSearchbox;
