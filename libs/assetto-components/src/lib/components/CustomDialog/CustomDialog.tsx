import {
  Dialog,
  DialogProps,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

interface IDialogProps extends DialogProps {
  title: string;
  body: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function CustomDialog(props: IDialogProps) {
  const { title, cancelText, confirmText, onConfirm, onCancel, body, ...rest } =
    props;

  return (
    <Dialog {...rest} PaperProps={{ sx: { p: 4, pt: 5, minWidth: '300px' } }}>
      <DialogTitle sx={{ fontSize: '2rem', padding: '0' }}>{title}</DialogTitle>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        {body}
      </Typography>
      <Stack sx={{ mt: 4 }} direction="row" spacing={6}>
        {
          <CustomButton
            onClick={onCancel}
            variant="contained"
            color="neutral"
            sx={{ width: '100%' }}
          >
            {cancelText || 'Cancel'}
          </CustomButton>
        }
        {
          <CustomButton
            onClick={onConfirm}
            variant="contained"
            color="primary"
            sx={{ width: '100%' }}
          >
            {confirmText || 'Confirm'}
          </CustomButton>
        }
      </Stack>
    </Dialog>
  );
}

export default CustomDialog;
