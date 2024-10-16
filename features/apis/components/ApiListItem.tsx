import Section from '@app/components/section/Section';
import SectionLink from '@app/components/section/SectionLink';
import Api from '@app/database/entities/Api.entity';

interface Props {
  api: Api;
}

const ApiListItem = (props: Props) => {
  const { api } = props;

  return (
    <Section>
      <SectionLink
        label={api.name}
        description={api.url}
        href={`/apis/${api.id}`}
      />
    </Section>
  );
};

export default ApiListItem;
