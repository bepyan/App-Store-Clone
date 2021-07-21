import { BottomTabParamList, IoniconsName } from "@types";
import React, { useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BolierScreen from "@screens/BolierScreen";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@components/atoms/Icon";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  const { colors } = useTheme();

  const iconName: { [key: string]: IoniconsName } = useMemo(
    () => ({
      TodayTab: "ios-newspaper",
      GameTab: "rocket",
      AppTab: "ios-logo-buffer",
      ArcadeTab: "ios-game-controller",
      SearchTab: "ios-search",
    }),
    []
  );

  const tabName: { [key: string]: string } = useMemo(
    () => ({
      TodayTab: "투데이",
      GameTab: "게임",
      AppTab: "앱",
      ArcadeTab: "Arcade",
      SearchTab: "검색",
    }),
    []
  );

  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ color }) => (
          <Ionicons name={iconName[name]} color={color} size={24} />
        ),
        title: tabName[name],
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.border,
        labelStyle: { fontSize: 12 },
        style: {
          backgroundColor: colors.card,
          paddingTop: 8,
          elevation: 0, // for android
        },
      }}
    >
      <Tab.Screen name="TodayTab" component={BolierScreen} />
      <Tab.Screen name="GameTab" component={BolierScreen} />
      <Tab.Screen name="AppTab" component={BolierScreen} />
      <Tab.Screen name="ArcadeTab" component={BolierScreen} />
      <Tab.Screen name="SearchTab" component={BolierScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
