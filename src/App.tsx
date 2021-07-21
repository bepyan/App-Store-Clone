import React from "react";
import Navigation from "@navigation";
import { AuthContextProvider } from "@context";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

/*
  Aware that we can't use `state persistence` `deep linking`
  https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
*/
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <Navigation />;
      </AuthContextProvider>
    </SafeAreaProvider>
  )
}
