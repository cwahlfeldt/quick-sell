import { View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

export default function ThemedView(props: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View
      {...props}
      style={{
        backgroundColor: theme.background,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
}
