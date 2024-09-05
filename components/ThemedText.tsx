import { Text } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

export default function ThemedText(props: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Text
      {...props}
      style={{
        color: theme.text,
        ...[props.style],
      }}
    >
      {props.children}
    </Text>
  );
}