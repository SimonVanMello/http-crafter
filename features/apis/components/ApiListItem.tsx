import { Heading } from '@app/components/gluestack-ui/heading';
import { Text } from '@app/components/gluestack-ui/text';
import Section from '@app/components/section/Section';
import Api from '@app/database/entities/Api.entity';

interface Props {
  api: Api;
}

const ApiListItem = (props: Props) => {
  const { api } = props;

  return (
    <Section>
      <Heading>{api.name}</Heading>
      <Text>{api.url}</Text>
    </Section>
  );
};

export default ApiListItem;
