import { useRouter } from 'expo-router';
import { useAtom } from 'jotai';
import { PenIcon, Trash2Icon } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import DeleteDialog from '@app/components/DeleteDialog';
import GenericActionsheet from '@app/components/GenericActionsheet';
import useAppToast from '@app/hooks/useAppToast.hook';
import useDisclosure from '@app/hooks/useDisclosure';

import { deleteApiAtom } from '../atoms/apis.atoms';

interface Props {
  apiId: number;
  isOpen: boolean;
  onClose: () => void;
}

const ApiActionsheet = (props: Props) => {
  const { apiId, isOpen, onClose } = props;

  const { t } = useTranslation();
  const toast = useAppToast();
  const router = useRouter();

  const deleteApiDialog = useDisclosure();
  const [deleteApi] = useAtom(deleteApiAtom);

  const handleEditPress = async () => {};

  const handleDeletePress = async () => {
    try {
      await deleteApi.mutateAsync(apiId);
      onClose();
      router.push('/apis');
    } catch {
      toast.error();
    }
  };

  return (
    <>
      <GenericActionsheet
        isOpen={isOpen}
        onClose={onClose}
        items={[
          {
            icon: PenIcon,
            isLoading: false,
            isDisabled: false,
            onPress: handleEditPress,
            label: t('screens.apiDetails.editApi'),
          },
          {
            icon: Trash2Icon,
            isLoading: deleteApi.isPending,
            isDisabled: deleteApi.isPending,
            onPress: () => {
              onClose();
              deleteApiDialog.onOpen();
            },
            label: t('screens.apiDetails.deleteApi'),
          },
        ]}
      />
      <DeleteDialog
        isOpen={deleteApiDialog.isOpen}
        onClose={deleteApiDialog.onClose}
        onDelete={handleDeletePress}
        isLoading={deleteApi.isPending}
        title={t('screens.apiDetails.deleteApi')}
        message={t('screens.apiDetails.deleteApiConfirmation')}
      />
    </>
  );
};

export default ApiActionsheet;
