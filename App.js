import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import AppBar from "./components/AppBar";
import HomePage from "./components/HomePage/HomePage";
import NotiPage from "./components/NotiPage/NotiPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { COLOR } from "./styles/colors";
import { useState } from "react";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [openAppBar, setOpenAppBar] = useState(1);
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {openAppBar && <AppBar />}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                }
                if (route.name === "Profile") {
                  iconName = focused
                    ? "person-circle"
                    : "person-circle-outline";
                } else if (route.name === "Noti") {
                  iconName = focused
                    ? "notifications"
                    : "notifications-outline";
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={24} color={color} />;
              },
              tabBarActiveTintColor: COLOR.active,
              tabBarInactiveTintColor: COLOR.inactive,
              tabBarShowIcon: true,
              tabBarShowLabel: false
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomePage}
            />
            <Tab.Screen
              name="Profile"
              component={ProfilePage}
            />
            <Tab.Screen
              name="Noti"
              component={NotiPage}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;