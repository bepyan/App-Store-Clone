import { RootParamList } from "@types";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import AuthStack from "./AuthStack";
import { useAuthContext } from "@context";

const Root = createStackNavigator<RootParamList>();

export default () => {
  const { auth } = useAuthContext();

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        {
          !!!auth ? (
            <>
              <Root.Screen name="NoAuthStack" component={AuthStack} />
            </>
          ) : (
            <>
              <Root.Screen name="BottomTab" component={BottomTab} />
              <Root.Screen name="AuthStack" component={AuthStack} />
            </>
          )
        }
      </Root.Navigator>
    </NavigationContainer>
  );
};
