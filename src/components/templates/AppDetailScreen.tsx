import React from "react";
import { View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

export default (props: Props) => {
  return <View>{props.children}</View>;
};
