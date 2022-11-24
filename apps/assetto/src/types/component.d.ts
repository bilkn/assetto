import { iCurrencyAsset } from './business';

interface iCommonAssetModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  asset: iCurrencyAsset;
}
