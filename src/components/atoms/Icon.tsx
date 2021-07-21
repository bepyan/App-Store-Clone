import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity } from "react-native";

export { EvilIcons, Ionicons };

export const HeaderLeftClose = (props: StackHeaderLeftButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={props.onPress} style={{ paddingLeft: 16 }}>
      <EvilIcons name="close" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

export const HeaderLeftBack = (props: StackHeaderLeftButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={props.onPress} style={{ paddingLeft: 8 }}>
      <EvilIcons name="chevron-left" size={40} color={colors.primary} />
    </TouchableOpacity>
  );
};
