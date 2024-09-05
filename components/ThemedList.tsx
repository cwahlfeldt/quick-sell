import React from "react";
import { FlashList } from "@shopify/flash-list";
import ThemedListItem from "./ThemedListingItem";
import { View } from "react-native";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
];

export default function ThemedList(props: any) {
  return (
    <FlashList
      {...props}
      data={DATA}
      renderItem={({ item }: any) => {
        return <ThemedListItem>{item.title}</ThemedListItem>;
      }}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      estimatedItemSize={300}
    />
  );
}
