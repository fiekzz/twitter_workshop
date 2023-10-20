import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/Home/homeScreen";
import SearchScreen from "./app/screens/Search/searchScreen";
import NotificationScreen from "./app/screens/Notification/notificationScreen";
import MessageScreen from "./app/screens/Message/messageScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = "logo-twitter";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Message") {
              iconName = focused ? "ios-mail" : "ios-mail-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1DA1F2",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
