import { type ComponentProps } from 'react';
import { Platform } from 'react-native';
import { Href, Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

const ExternalLink = (props: Props) => {
  const { href, ...rest } = props;

  return (
    <Link
      target="_blank"
      {...rest}
      href={href as Href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
};

export default ExternalLink;
