import { Stack, Tabs } from 'expo-router';
import { AuthProvider } from '@/src/context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <AuthProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'white' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="advertisers"
          options={{
            title: 'Advertisers',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: 'Products',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
