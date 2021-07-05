import { Dispatch } from "react";
import { StyleProp, ViewStyle } from "react-native";

declare module "@types" {
  type UseStateType<T> = [T, Dispatch<SetStateAction<T>>];
  type StyleType = StyleProp<ViewStyle>;
}
