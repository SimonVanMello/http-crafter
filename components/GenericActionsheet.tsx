import { LucideIcon } from 'lucide-react-native';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetIcon,
  ActionsheetItem,
  ActionsheetItemText,
} from '@app/components/gluestack-ui/actionsheet';
import { Box } from '@app/components/gluestack-ui/box';
import { Spinner } from '@app/components/gluestack-ui/spinner';

export interface GenericActionsheetItem {
  icon?: LucideIcon;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress: () => void;
  label: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: GenericActionsheetItem[];
  snapPoints?: number[];
}

const GenericActionsheet = (props: Props) => {
  const { isOpen, onClose, items, snapPoints } = props;

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={snapPoints}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        {items.map((item) => (
          <ActionsheetItem
            key={item.label}
            onPress={item.onPress}
            isDisabled={item.isDisabled}
          >
            {!!item.icon && (
              <ActionsheetIcon
                className="stroke-background-700"
                as={item.icon}
              />
            )}
            <ActionsheetItemText>{item.label}</ActionsheetItemText>
            {item.isLoading && (
              <Box className="flex flex-row flex-1 justify-end">
                <Spinner />
              </Box>
            )}
          </ActionsheetItem>
        ))}
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default GenericActionsheet;
