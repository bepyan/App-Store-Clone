import { NoAuthStackParamList } from "@types";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BolierScreen from "@screens/BolierScreen";
import { useTheme } from "@react-navigation/native";

const Stack = createStackNavigator<NoAuthStackParamList>();

const NoAuthStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: colors.card,
        },
        // headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen name="BolierScreen" component={BolierScreen} />
    </Stack.Navigator>
  );
};

export default NoAuthStack;
