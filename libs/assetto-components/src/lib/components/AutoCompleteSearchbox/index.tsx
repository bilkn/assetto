import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  Stack,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { StyledInput, StyledLabel } from '../CustomInput';
import { CustomChevronIcon } from '../icons';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { label } = props;
  const theme = useTheme();

  // POSSIBLE_TODO: Add button to close and open dropdown menu
  return (
    <Autocomplete
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      options={mockData}
      renderInput={(params) => (
        <FormControl sx={{ alignItems: 'flex-start', width: '100%' }}>
          <StyledLabel>{label}</StyledLabel>
          <StyledInput
            inputProps={params.inputProps}
            ref={params.InputProps.ref}
            disableUnderline
            fullWidth
            endAdornment={
              <Stack
                sx={{
                  transform: `rotateX(${isOpen ? '180' : '0'}deg)`,
                  pointerEvents: 'none',
                  paddingRight: '5px',
                }}
              >
                <CustomChevronIcon color={theme.palette.grey['600']} />
              </Stack>
            }
          />
        </FormControl>
      )}
      {...props}
    />
  );
}

export default AutoCompleteSearchbox;
