import { Stack } from '@mui/material';
import { iCommonAssetModalProps } from 'apps/assetto/src/types/component';
import CustomInput from 'libs/assetto-components/src/lib/components/CustomInput';
import AssetModalBase from '../AssetModalBase';

function AssetModalCurrency({
  open,
  onConfirm,
  onClose,
  asset,
}: iCommonAssetModalProps) {
  const { amount, totalInCurrency, type } = asset;

  return (
    <AssetModalBase
      total={totalInCurrency}
      title="Add asset"
      open={open}
      onConfirm={onConfirm}
      onClose={onClose}
    >
      <Stack spacing={3}>
        <CustomInput fullWidth label="Select Currency" />
        <CustomInput fullWidth label="Select Currency" />
        <CustomInput fullWidth label="Select Currency" />
      </Stack>
    </AssetModalBase>
  );
}

export default AssetModalCurrency;
