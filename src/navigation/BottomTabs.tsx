import { BottomTabsParamList } from "@types";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BolierScreen from "@screens/BolierScreen";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () => {
  //   const iconName: { [key: string]: [IconName, IconName] } = {
  //     NoticeScreen: ["announcement-line", "announcement"],
  //     StudyScreen: ["report-line", "report"],
  //     NotificationScreen: ["alert-line", "alert"],
  //     AccountScreen: ["person-line", "person"],
  //   };

  //   const tabName: { [key: string]: string } = {
  //     NoticeScreen: "공지",
  //     StudyScreen: "학습",
  //     NotificationScreen: "알림",
  //     AccountScreen: "계정",
  //   };

  return (
    <Tab.Navigator
      //   screenOptions={({ route: { name } }) => ({
      //     tabBarIcon: ({ focused, color }) => (
      //       <Icon name={iconName[name][focused ? 1 : 0]} color={color} />
      //     ),
      //     title: tabName[name],
      //   })}
      tabBarOptions={{
        activeTintColor: "#A19882",
        inactiveTintColor: "#C2B8A3",
        labelStyle: {
          fontSize: 14,
        },
        tabStyle: {
          borderTopWidth: 0.5,
          borderTopColor: "#dedede",
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={BolierScreen} />
      <Tab.Screen name="AccountScreen" component={BolierScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
