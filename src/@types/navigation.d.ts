import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";

declare module "@types" {
  /* 
    navigation params
  */
  type RootParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
    Stacks: NavigatorScreenParams<StacksParamList>;
  };
  type BottomTabsParamList = {
    HomeScreen: undefined;
    AccountScreen: undefined;
  };
  type StacksParamList = {
    BolierScreen: undefined;
  };

  /* 
    route props
  */
  export type RootRouteProps<RouteName extends keyof RootParamList> = RouteProp<
    RootParamList,
    RouteName
  >;
}
