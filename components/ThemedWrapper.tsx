import { View, Text } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import ThemedView from "./ThemedView";

export default function ThemedWrapper(props: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <ThemedView
      {...props}
      style={{
        width: "100%",
        height: "100%",
        paddingHorizontal: 24,
        paddingVertical: 80,
        ...props.style,
      }}
    >
      {props.title && (
        <Text style={{ color: theme.text, fontWeight: "bold", fontSize: 64, marginBottom: 24 }}>
          {props.title}
        </Text>
      )}
      {props.children}
    </ThemedView>
  );
}
