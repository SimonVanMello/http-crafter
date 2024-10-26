import { useAtom } from 'jotai';

import { Button, ButtonText } from '@app/components/gluestack-ui/button';
import Api from '@app/database/entities/Api.entity';
import Folder from '@app/database/entities/Folder.entity';

import { createFolderAtom } from '../atoms/folders.atoms';

interface Props {
  api?: Api;
  parentFolder?: Folder;
  className?: string;
}

const AddMockFolder = (props: Props) => {
  const { api, parentFolder, className } = props;

  const [{ mutateAsync }] = useAtom(createFolderAtom);

  const handlePress = async () => {
    const folder = new Folder();
    folder.name = 'Mock Folder';

    if (parentFolder) {
      folder.parent = parentFolder;
    } else if (api) {
      folder.api = api;
    }

    await mutateAsync(folder);
  };

  return (
    <Button onPress={handlePress} className={className}>
      <ButtonText>Add Folder</ButtonText>
    </Button>
  );
};

export default AddMockFolder;
