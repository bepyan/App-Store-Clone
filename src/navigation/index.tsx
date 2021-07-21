import { RootParamList } from "@types";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import AuthStack from "./AuthStack";
import { useAuthContext } from "@context";
import { Appearance } from "react-native";
import { MyDarkTheme, MyTheme } from "@styles";
import ModalStack from "./ModalStack";
import { forStackFade } from "@utils";

const Root = createStackNavigator<RootParamList>();

export default () => {
  const { auth } = useAuthContext();
  const [mode, setMode] = React.useState(Appearance.getColorScheme() || "light");

  React.useEffect(() => {
    const listener = () => setMode(Appearance.getColorScheme() || "light");
    Appearance.addChangeListener(listener);
    return () => Appearance.removeChangeListener(listener);
  }, []);

  return (
    <NavigationContainer theme={mode === "dark" ? MyDarkTheme : MyTheme}>
      <Root.Navigator screenOptions={() => ({ headerShown: false })} mode="modal">
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
        <Root.Screen
          name="ModalStack"
          component={ModalStack}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            cardOverlayEnabled: true,
            gestureEnabled: false,
            cardStyleInterpolator: forStackFade,
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};
