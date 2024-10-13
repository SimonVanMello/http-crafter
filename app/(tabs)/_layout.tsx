import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';

import TabBarIcon from '@app/components/navigation/TabBarIcon';
import useColorMode from '@app/hooks/useColorMode.hook';
import useColors from '@app/hooks/useColors.hook';

const Layout = () => {
  const { isDarkMode } = useColorMode();
  const { getThemeColor } = useColors();
  const { t } = useTranslation();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: isDarkMode
              ? getThemeColor('background', 0)
              : getThemeColor('background', 100),
          },
          tabBarActiveTintColor: getThemeColor('primary', 500),
          tabBarInactiveTintColor: getThemeColor('secondary', 500),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: t('screens.home.title'),
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'home' : 'home-outline'}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
