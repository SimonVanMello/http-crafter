import { useRouter } from 'expo-router';

import { Heading } from '@app/components/gluestack-ui/heading';
import { Pressable } from '@app/components/gluestack-ui/pressable';
import { Text } from '@app/components/gluestack-ui/text';
import Section from '@app/components/section/Section';
import Api from '@app/database/entities/Api.entity';

interface Props {
  api: Api;
}

const ApiListItem = (props: Props) => {
  const { api } = props;

  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(`/apis/${api.id}`)}>
      <Section>
        <Heading>{api.name}</Heading>
        <Text>{api.url}</Text>
      </Section>
    </Pressable>
  );
};

export default ApiListItem;
