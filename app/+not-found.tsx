import { Link } from 'expo-router';

import { Button, ButtonText } from '@app/components/gluestack-ui/button';
import PageView from '@app/components/page-view/PageView';

const NotFound = () => {
  return (
    <PageView title="404 Not Found" centerTitle>
      <Link className="text-typography-500 text-2xl" href="/" asChild>
        <Button>
          <ButtonText>Go back home</ButtonText>
        </Button>
      </Link>
    </PageView>
  );
};

export default NotFound;
