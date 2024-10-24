import { Box } from '../gluestack-ui/box';
import { Heading } from '../gluestack-ui/heading';
import { Switch } from '../gluestack-ui/switch';
import { Text } from '../gluestack-ui/text';
import SectionItem from './SectionItem';

interface Props {
  label: string;
  description?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const SectionSwitch = (props: Props) => {
  const { label, description, value, onChange } = props;

  return (
    <SectionItem className="flex flex-row justify-between items-center ">
      <Box className="flex flex-1">
        <Heading numberOfLines={1}>{label}</Heading>
        {!!description && <Text numberOfLines={1}>{description}</Text>}
      </Box>
      <Switch value={value} onValueChange={onChange} />
    </SectionItem>
  );
};

export default SectionSwitch;
