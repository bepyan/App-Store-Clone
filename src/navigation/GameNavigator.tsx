import React from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { GameTab } from "@screens/BottomTab";
import { BlurView } from "expo-blur";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

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
      <Stack.Screen name="GameHomeScreen" component={GameTab} />
    </Stack.Navigator>
  );
};

export default GameNavigator;
