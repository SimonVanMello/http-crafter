import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { Button, ButtonIcon } from '../gluestack-ui/button';

interface Props {
  className?: string;
}

const BackButton = (props: Props) => {
  const { className } = props;

  const router = useRouter();

  return (
    <Button variant="link" className={className} onPress={router.back}>
      <ButtonIcon as={ChevronLeft} size="xl" />
    </Button>
  );
};

export default BackButton;
