import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const GameTab = (props: Props) => {
  const nav = useNavigation();

  useEffect(() => {
    console.log(nav.dangerouslyGetState());
    nav.setOptions({
      headerTitle: "게임",
    });
  }, []);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 100 }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
          게임
        </Text>
        <View style={{ height: 300, backgroundColor: "red" }} />
        <View style={{ height: 300 }} />
        <View style={{ height: 300, backgroundColor: "gray" }} />
        <View style={{ height: 300, backgroundColor: "yellow" }} />
      </View>
    </ScrollView>
  );
};

export default GameTab;
