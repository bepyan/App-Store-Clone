import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";

declare module "@types" {
  /* 
    navigation params
  */
  type RootParamList = {
    BottomTab: NavigatorScreenParams<BottomTabParamList>;
    AuthStack: NavigatorScreenParams<AuthStackParamList>;
    NoAuthStack: NavigatorScreenParams<NoAuthStackParamList>;
    ModalStack: NavigatorScreenParams<ModalStackParamList>;
  };

  type NoAuthStackParamList = {
    SigninScreen: undefined;
    SignupScreen: undefined;
  };

  type AuthStackParamList = {
    BolierScreen: undefined;
  };

  type BottomTabParamList = {
    TodayTab: undefined;
    GameTab: undefined;
    AppTab: undefined;
    ArcadeTab: undefined;
    SearchTab: undefined;
  };

  type ModalStackParamList = {
    AlertScreen: { title?: string; content?: string };
    ConfirmScreen: {
      title?: string;
      content?: string;
      onConfirm: () => void;
    };
  };

  /* 
    route props
  */
  export type RootRouteProps<RouteName extends keyof RootParamList> = RouteProp<
    RootParamList,
    RouteName
  >;

  export type AuthStackRouteProps<RouteName extends keyof AuthStackParamList> =
    RouteProp<AuthStackParamList, RouteName>;

  export type NoAuthStackRouteProps<
    RouteName extends keyof NoAuthStackParamList
  > = RouteProp<NoAuthStackParamList, RouteName>;

  export type ModalRouteProps<RouteName extends keyof ModalStackParamList> =
    RouteProp<ModalStackParamList, RouteName>;
}
