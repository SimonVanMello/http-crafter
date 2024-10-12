import { Tabs } from 'expo-router';

import TabBarIcon from '@app/components/navigation/TabBarIcon';
import useColorMode from '@app/hooks/useColorMode.hook';
import useColors from '@app/hooks/useColors.hook';

const Layout = () => {
  const { isDarkMode } = useColorMode();
  const { getThemeColor } = useColors();

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
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
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
