import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  route: {
    key: string;
    name: string;
  };
}

const BolierScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>{props.route.name}</Text>
    </View>
  );
};

export default BolierScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
