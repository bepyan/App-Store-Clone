import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface ATextProps extends TextProps {
  children?: React.ReactNode;
  type?:
    | "title"
    | "title1"
    | "title2"
    | "title3"
    | "headline"
    | "body"
    | "subhead"
    | "caption";
  weight?: "black" | "bold" | "medium" | "regular" | "light" | "thin";
}

const styles = StyleSheet.create({
  title: { fontSize: 34, fontFamily: "Roboto_900Black" },
  title1: { fontSize: 28, fontFamily: "Roboto_900Black" },
  title2: { fontSize: 22, fontFamily: "Roboto_700Bold" },
  title3: { fontSize: 20, fontFamily: "Roboto_500Medium" },
  headline: { fontSize: 17, fontFamily: "Roboto_500Medium" },
  body: { fontSize: 17, fontFamily: "Roboto_400Regular" },
  subhead: { fontSize: 15, fontFamily: "Roboto_300Light" },
  caption: { fontSize: 12, fontFamily: "Roboto_300Light" },

  black: { fontFamily: "Roboto_900Black" },
  bold: { fontFamily: "Roboto_700Bold" },
  medium: { fontFamily: "Roboto_500Medium" },
  regular: { fontFamily: "Roboto_400Regular" },
  light: { fontFamily: "Roboto_300Light" },
  thin: { fontFamily: "Roboto_100Thin" },
});

export const AText = (props: ATextProps) => {
  const { colors } = useTheme();
  return (
    <Text
      {...props}
      style={[
        { color: colors.text },
        styles[props.type || "body"],
        props.weight && styles[props.weight],
        props.style,
      ]}
    />
  );
};
