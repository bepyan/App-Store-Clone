import { NoAuthStackParamList } from "@types";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BolierScreen from "@screens/BolierScreen";

const Stack = createStackNavigator<NoAuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                // headerLeft: HeaderLeftButton,
            }}
        >
            <Stack.Screen name="BolierScreen" component={BolierScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
