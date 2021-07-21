import { Dispatch } from "react";
import { StyleProp, ViewStyle } from "react-native";

declare module "@types" {
  type useStateType<T> = [T, Dispatch<SetStateAction<T>>];

  type styleType = StyleProp<ViewStyle>;
}