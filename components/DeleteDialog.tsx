import { TrashIcon } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from './gluestack-ui/alert-dialog';
import { Box } from './gluestack-ui/box';
import { Button, ButtonSpinner, ButtonText } from './gluestack-ui/button';
import { Heading } from './gluestack-ui/heading';
import { Icon } from './gluestack-ui/icon';
import { Text } from './gluestack-ui/text';
import { VStack } from './gluestack-ui/vstack';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  isLoading?: boolean;
  title: string;
  message: string;
}

const DeleteDialog = (props: Props) => {
  const { isOpen, onClose, onDelete, isLoading, title, message } = props;

  const { t } = useTranslation();

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogBackdrop />
      <AlertDialogContent className="gap-4 items-center">
        <Box className="rounded-full h-[52px] w-[52px] bg-background-error items-center justify-center">
          <Icon as={TrashIcon} size="lg" className="stroke-error-500" />
        </Box>
        <VStack className="items-center justify-between h-40 gap-4">
          <AlertDialogHeader>
            <Heading size="md">{title}</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm" className="text-center">
              {message}
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              size="sm"
              action="negative"
              isDisabled={isLoading}
              onPress={handleDelete}
              className="px-[30px]"
            >
              {isLoading && <ButtonSpinner />}
              <ButtonText>{t('common.delete')}</ButtonText>
            </Button>
            <Button
              variant="outline"
              action="secondary"
              onPress={onClose}
              size="sm"
              className="px-[30px]"
            >
              <ButtonText>{t('common.cancel')}</ButtonText>
            </Button>
          </AlertDialogFooter>
        </VStack>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
