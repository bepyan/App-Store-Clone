import { useAuthContext } from "@context";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

interface Props {}

const SignupScreen = (props: Props) => {
  const {
    useAuth: { signIn },
  } = useAuthContext();
  return (
    <View>
      <TouchableHighlight onPress={signIn}>
        <Text>로그인</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SignupScreen;
