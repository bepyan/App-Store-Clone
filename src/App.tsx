import React from "react";
import Navigation from "@navigation";
import { AuthContextProvider } from "@context";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
/*
  Aware that we can't use `state persistence` `deep linking`
  https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
*/
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  let [isLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  if (!isLoaded) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
