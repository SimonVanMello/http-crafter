import { useRouter } from 'expo-router';
import { useAtom } from 'jotai';

import {
  Button,
  ButtonSpinner,
  ButtonText,
} from '@app/components/gluestack-ui/button';
import Api from '@app/database/entities/Api.entity';
import Protocol from '@app/enums/Protocol.enum';
import useAppToast from '@app/hooks/useAppToast.hook';

import { createApiAtom } from '../atoms/apis.atoms';

const AddMockApi = () => {
  const [{ mutateAsync, isPending }] = useAtom(createApiAtom);
  const toast = useAppToast();
  const router = useRouter();

  const handlePress = async () => {
    try {
      const api = new Api();

      api.name = 'Mock API';
      api.host = 'localhost';
      api.port = 3000;
      api.protocol = Protocol.HTTP;

      await mutateAsync(api);
      router.push('/apis');
    } catch {
      toast.error('Failed to add mock API');
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
