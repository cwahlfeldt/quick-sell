import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.tint,
        tabBarStyle: {
          backgroundColor: theme.background,
          height: 90,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: () => (
            <Ionicons
              name="home-sharp"
              size={32}
              color={theme.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="listings"
        options={{
          title: "Listings",
          tabBarIcon: () => (
            <Ionicons
              name="list-sharp"
              size={32}
              color={theme.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: "Templates",
          tabBarIcon: () => (
            <Ionicons
              name="create-sharp"
              size={32}
              color={theme.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons
              name="settings-sharp"
              size={32}
              color={theme.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}
