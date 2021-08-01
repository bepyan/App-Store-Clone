import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GameDetail, GameHome } from "@screens/GameTab";

const Stack = createStackNavigator();

const GameNavigator = () => {
  const { dark } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            tint={dark ? "dark" : "light"}
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
        headerBackTitleVisible: false,
        // headerLeft: HeaderLeftButton,
      })}
    >
      <Stack.Screen name="GameHome" component={GameHome} />
      <Stack.Screen name="GameDetail" component={GameDetail} />
    </Stack.Navigator>
  );
};

export default GameNavigator;
