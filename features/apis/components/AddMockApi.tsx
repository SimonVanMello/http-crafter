import { useAtom } from 'jotai';

import {
  Button,
  ButtonSpinner,
  ButtonText,
} from '@app/components/gluestack-ui/button';
import Api from '@app/database/entities/Api.entity';
import Protocol from '@app/enums/Protocol.enum';

import { createApiAtom } from '../atoms/apis.atoms';

const AddMockApi = () => {
  const [{ mutateAsync, isPending }] = useAtom(createApiAtom);

  const handlePress = async () => {
    try {
      const api = new Api();

      api.name = 'Mock API';
      api.host = 'localhost';
      api.port = 3000;
      api.protocol = Protocol.HTTP;

      await mutateAsync(api);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onPress={handlePress}>
      {isPending && <ButtonSpinner />}
      <ButtonText>Add Mock API</ButtonText>
    </Button>
  );
};

export default AddMockApi;
