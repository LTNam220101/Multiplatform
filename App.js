import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import AppBar from "./components/AppBar";
import HomePage from "./components/HomePage/HomePage";
import NotiPage from "./components/NotiPage/NotiPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { COLOR } from "./styles/colors";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [openAppBar, setOpenAppBar] = useState(1);
  const [isSignedIn, setIsSignIn] = useState(false);

  return (
    <>
      <StatusBar
        backgroundColor={isSignedIn ? COLOR.white : COLOR.blueBackgroundLogin}
        barStyle={isSignedIn ? "dark-content" : "light-content"}
      />
      {isSignedIn ? (
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
              <Tab.Screen name="Home" component={HomePage} />
              <Tab.Screen name="Profile" component={ProfilePage} />
              <Tab.Screen name="Noti" component={NotiPage} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={SignupPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
