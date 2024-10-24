import { Link, LinkProps } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

import useColors from '@app/hooks/useColors.hook';

import { Box } from '../gluestack-ui/box';
import { Heading } from '../gluestack-ui/heading';
import { Text } from '../gluestack-ui/text';
import TouchableSectionItem from './TouchableSectionItem';

interface Props<T extends string | object> extends LinkProps<T> {
  label: string;
  description?: string;
}

const SectionLink = <T extends string | object>(props: Props<T>) => {
  const { label, description, href, ...rest } = props;

  const { getThemeColor } = useColors();

  return (
    <Link {...rest} href={href} asChild>
      <TouchableSectionItem className="flex flex-row justify-between items-center transition active:bg-background-200">
        <Box className="flex flex-1">
          <Heading numberOfLines={1}>{label}</Heading>
          {!!description && <Text numberOfLines={1}>{description}</Text>}
        </Box>
        <ChevronRight color={getThemeColor('typography', 500)} />
      </TouchableSectionItem>
    </Link>
  );
};

export default SectionLink;
