import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";

declare module "@types" {
  /* 
    navigation params
  */
  type RootParamList = {
    BottomTab: NavigatorScreenParams<BottomTabParamList>;
    AuthStack: NavigatorScreenParams<AuthStackParamList>;
    NoAuthStack: NavigatorScreenParams<NoAuthStackParamList>
  };

  type NoAuthStackParamList = {
    BolierScreen: undefined;
  };

  type AuthStackParamList = {
    BolierScreen: undefined;
  }

  type BottomTabParamList = {
    HomeScreen: undefined;
    AccountScreen: undefined;
  };

  /* 
    route props
  */
  export type RootRouteProps<RouteName extends keyof RootParamList> = RouteProp<
    RootParamList,
    RouteName
  >;
}
