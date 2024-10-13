import { Box } from '../gluestack-ui/box';
import { Switch } from '../gluestack-ui/switch';
import { Text } from '../gluestack-ui/text';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const SectionSwitch = (props: Props) => {
  const { label, value, onChange } = props;

  return (
    <Box className="flex flex-row justify-between items-center">
      <Text className="text-lg flex-1 font-semibold">{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </Box>
  );
};

export default SectionSwitch;
