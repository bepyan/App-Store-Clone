import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ModalStackParamList } from "@types";
import BolierScreen from "@screens/BolierScreen";

const Stack = createStackNavigator<ModalStackParamList>();

const ModalStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AlertScreen" component={BolierScreen} />
      <Stack.Screen name="ConfirmScreen" component={BolierScreen} />
    </Stack.Navigator>
  );
};

export default ModalStack;
