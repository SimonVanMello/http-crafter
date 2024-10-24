import { EllipsisVertical } from 'lucide-react-native';

import HeaderActionButton from '@app/components/HeaderActionButton';
import useDisclosure from '@app/hooks/useDisclosure';

import ApiActionsheet from './ApiActionsheet';

interface Props {
  apiId: number;
}

const ApiActionsheetButton = (props: Props) => {
  const { apiId } = props;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <HeaderActionButton icon={EllipsisVertical} onPress={onOpen} />
      <ApiActionsheet apiId={apiId} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ApiActionsheetButton;
