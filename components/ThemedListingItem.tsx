import { Pressable, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import ThemedText from "./ThemedText";
import { Link } from "expo-router";

export default function ThemedListItem(props: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Link href={{
      pathname: props?.href || "/listings/listing",
      params: {id: props.id || 1}
      }} asChild>
      <Pressable
        style={{
          width: "100%",
          height: 80,
          backgroundColor: theme.background,
          display: "flex",
          justifyContent: "center",
          padding: 16,
          borderColor: theme.border,
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 8,
        }}
      >
        <ThemedText>{props.children}</ThemedText>
      </Pressable>
    </Link>
  );
}
