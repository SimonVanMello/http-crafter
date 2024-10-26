import { useTranslation } from 'react-i18next';

import Section from '@app/components/section/Section';
import SectionLink from '@app/components/section/SectionLink';
import Folder from '@app/database/entities/Folder.entity';

interface Props {
  apiId: string;
  folders: Folder[];
}

const FolderList = (props: Props) => {
  const { apiId, folders } = props;

  const { t } = useTranslation();

  return (
    <Section title={t('screens.folders.title')}>
      {folders.map((folder) => (
        <SectionLink
          label={folder.name}
          href={`/apis/${apiId}/folders/${folder.id}`}
        />
      ))}
    </Section>
  );
};

export default FolderList;
