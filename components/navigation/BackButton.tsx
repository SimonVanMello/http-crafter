import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { Button, ButtonIcon, ButtonText } from '../gluestack-ui/button';

interface Props {
  className?: string;
}

const BackButton = (props: Props) => {
  const { className } = props;

  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Button variant="link" className={className} onPress={router.back}>
      <ButtonIcon as={ChevronLeft} />
      <ButtonText>{t('common.back')}</ButtonText>
    </Button>
  );
};

export default BackButton;
