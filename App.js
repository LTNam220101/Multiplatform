import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import ActivityBar from "./components/ActivityBar";
import AppBar from "./components/AppBar";
import HomePage from "./components/HomePage/HomePage";
import NotiPage from "./components/NotiPage/NotiPage";
import ToolBar from "./components/ToolBar";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <AppBar />
          <ActivityBar />
          <ToolBar />
          <HomePage />
          <NotiPage />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
