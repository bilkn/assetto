import { iCurrencyAsset } from '../../../../libs/assetto-components/src/types/domain.types';

interface iCommonAssetModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  asset: iCurrencyAsset;
}
