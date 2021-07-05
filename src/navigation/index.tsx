import { RootParamList } from "@types";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import Stacks from "./Stacks";

const Root = createStackNavigator<RootParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Root.Screen name="BottomTabs" component={BottomTabs} />
        <Root.Screen name="Stacks" component={Stacks} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
