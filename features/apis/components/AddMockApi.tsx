import { useState } from 'react';

import {
  Button,
  ButtonSpinner,
  ButtonText,
} from '@app/components/gluestack-ui/button';
import Api from '@app/database/entities/Api.entity';
import Protocol from '@app/enums/Protocol.enum';

import useApis from '../hooks/useApis.hook';

const AddMockApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { createApi } = useApis(false);

  const handlePress = async () => {
    try {
      setIsLoading(true);

      const api = new Api();
      api.name = 'Mock API';
      api.host = 'localhost';
      api.port = 3000;
      api.protocol = Protocol.HTTP;

      await createApi(api);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onPress={handlePress}>
      {isLoading && <ButtonSpinner />}
      <ButtonText>Add Mock API</ButtonText>
    </Button>
  );
};

export default AddMockApi;
