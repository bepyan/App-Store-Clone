import { AText, Ionicons } from "@atoms";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

export default () => {
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
        <AText type="title">게임</AText>

        <View>
          <AText type="title2">오늘은 이 게임</AText>
          <AText type="subhead">에디터가 직접 골랐답니다</AText>
          <View style={{ flexDirection: "row" }}>
            <View></View>
            <View>
              <AText type="headline">
                전략적 팀 전투: 리그 오브 레전드 전략 게임
              </AText>
              <AText type="caption">리그 오브 레전드 전략</AText>
            </View>
            <Ionicons name="cloud-download-outline" color="blue" size={36} />
          </View>
        </View>

        <View style={{ height: 300, backgroundColor: "red" }} />
        <View style={{ height: 300 }} />
        <View style={{ height: 300, backgroundColor: "gray" }} />
        <View style={{ height: 300, backgroundColor: "yellow" }} />
      </View>
    </ScrollView>
  );
};
