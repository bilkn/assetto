import { CustomButton } from '@assetto/assetto-components';
import { Box, Modal, ModalProps, Paper, Typography } from '@mui/material';

interface iAssetModalBaseProps extends ModalProps {
  title: string;
  total: string;
  onConfirm: () => void;
}

function AssetModalBase(props: iAssetModalBaseProps) {
  const { title, total, onConfirm, onClose, open, children, ...rest } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      {...rest}
    >
      <Paper sx={{ minWidth: '335px', paddingX: 4, paddingY: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Box sx={{ mt: 3 }}>{children}</Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Equal To:
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: '2rem', fontWeight: 500 }}
          >
            {total}
          </Typography>
        </Box>
        <CustomButton variant="contained" fullWidth sx={{ mt: 4 }}>
          Confirm
        </CustomButton>
      </Paper>
    </Modal>
  );
}

export default AssetModalBase;
