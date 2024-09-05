import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";

export default function Listing(props: any) {
  const params = useLocalSearchParams();  
  console.log(params)

  return (
    <ThemedView style={{ height: "100%", paddingVertical: 32, paddingHorizontal: 16 }}>
      <ThemedText>{1}</ThemedText>
    </ThemedView>
  );
}

