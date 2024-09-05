import ThemedText from "@/components/ThemedText";
import ThemedWrapper from "@/components/ThemedWrapper";
import { Text } from "react-native";

export default function Dashboard() {
  return (
    <ThemedWrapper title="Dashboard">
      <ThemedText>Recent Listings:</ThemedText>
      <ThemedText>Popular Templates:</ThemedText>
    </ThemedWrapper>
  );
}
