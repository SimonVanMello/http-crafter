/* eslint-disable no-unused-expressions */
import { Href, useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { Button, ButtonIcon } from '../gluestack-ui/button';

interface Props<T extends string | object> {
  className?: string;
  href?: Href<T>;
}

const BackButton = <T extends string | object>(props: Props<T>) => {
  const { className, href } = props;

  const router = useRouter();

  const handlePress = () => {
    href ? router.navigate(href) : router.back();
  };

  return (
    <Button variant="link" className={className} onPress={handlePress}>
      <ButtonIcon as={ChevronLeft} />
    </Button>
  );
};

export default BackButton;
