import { Theme } from "@react-navigation/native";

export const MyTheme: Theme = {
  dark: false,
  colors: {
    primary: "hsla(211, 100%, 50%, 1)",
    background: "hsla(0, 0%, 100%, 1)",
    card: "hsla(0, 0%, 98%, 0.94)",
    text: "hsla(0, 0%, 0%, 1)",
    border: "hsla(240, 6%, 25%, 0.29)",
    notification: "hsla(3, 100%, 59%, 1)",
  },
};

export const MyDarkTheme = {
  dark: true,
  colors: {
    primary: "hsla(210, 100%, 52%, 1)",
    background: "hsla(0, 0%, 0%, 1)",
    card: "hsla(0, 0%, 9%, 0.94)",
    text: "hsla(0, 0%, 100%, 1)",
    border: "hsla(240, 2%, 22%, 1)",
    notification: "hsla(3, 100%, 61%, 1)",
  },
};
