import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitle: "Listing [id]",
      }}
    >
      <Stack.Screen name="[id]" />
    </Stack>
  );
}

