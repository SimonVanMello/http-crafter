import { Link } from 'expo-router';

import { Button, ButtonText } from '@app/components/gluestack-ui/button';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/Section';

const SettingsScreen = () => {
  return (
    <PageView title="Settings" className="gap-4">
      <Section>
        <Link href="/settings/details" asChild>
          <Button>
            <ButtonText>Navigate to details page</ButtonText>
          </Button>
        </Link>
      </Section>
    </PageView>
  );
};

export default SettingsScreen;
