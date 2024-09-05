import ThemedText from "@/components/ThemedText";
import ThemedList from "@/components/ThemedList";
import ThemedView from "@/components/ThemedView";

export default function Listings() {
  return (
    <ThemedView style={{ height: "100%", paddingTop: 64 }}>
      <>
        <ThemedText
          style={{ fontWeight: "bold", fontSize: 64, marginBottom: 24 }}
        >
          Listings
        </ThemedText>
      </>
      <ThemedList />
    </ThemedView>
  );
}
