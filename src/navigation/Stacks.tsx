import { StacksParamList } from "@types";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BolierScreen from "@screens/BolierScreen";

interface Props {}

const Stack = createStackNavigator<StacksParamList>();

const Stacks = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        // headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen name="BolierScreen" component={BolierScreen} />
    </Stack.Navigator>
  );
};

export default Stacks;
