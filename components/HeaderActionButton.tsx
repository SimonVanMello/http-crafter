import { LucideIcon } from 'lucide-react-native';

import { Button, ButtonIcon } from './gluestack-ui/button';

interface Props {
  icon: LucideIcon;
  onPress: () => void;
}

const HeaderActionButton = (props: Props) => {
  const { icon, onPress } = props;

  return (
    <Button variant="link" onPress={onPress}>
      <ButtonIcon as={icon} />
    </Button>
  );
};

export default HeaderActionButton;
