import { BottomTabParamList, IoniconsName } from "@types";
import React, { useMemo } from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import BolierScreen from "@screens/BolierScreen";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@components/atoms/Icon";
import { BlurView } from "expo-blur";
import GameNavigator from "./GameNavigator";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  const { dark, colors } = useTheme();

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
      tabBar={(props) => (
        <BlurView
          style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          tint={dark ? "dark" : "light"}
          intensity={200}
        >
          <BottomTabBar {...props} />
        </BlurView>
      )}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: dark ? "#b1b1b1" : colors.border,
        labelStyle: { fontSize: 12 },
        style: {
          backgroundColor: "transparent",
          paddingTop: 8,
          elevation: 0, // for android
        },
      }}
    >
      <Tab.Screen name="TodayTab" component={BolierScreen} />
      <Tab.Screen name="GameTab" component={GameNavigator} />
      <Tab.Screen name="AppTab" component={BolierScreen} />
      <Tab.Screen name="ArcadeTab" component={BolierScreen} />
      <Tab.Screen name="SearchTab" component={BolierScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
