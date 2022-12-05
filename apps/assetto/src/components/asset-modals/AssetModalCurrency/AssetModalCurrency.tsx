import {
  AutoCompleteSearchbox,
  CustomTextField,
} from '@assetto/assetto-components';
import { Stack } from '@mui/material';
import { iCommonAssetModalProps } from 'apps/assetto/src/types/component.types';
import AssetModalBase from '../AssetModalBase/AssetModalBase';

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
        <AutoCompleteSearchbox label="Select Currency" />
        <CustomTextField name="amount" label="Enter amount" fullWidth />
      </Stack>
    </AssetModalBase>
  );
}

export default AssetModalCurrency;
