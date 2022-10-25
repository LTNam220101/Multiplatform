import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ToolBar from "./ToolBar";
import News from "./News";
import { COLOR } from "../../styles/colors";

const HomePage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ToolBar />
      <View style={styles.homePage}>
        <News
          avatar={require("../../assets/avatar.jpg")}
          name="Lương Thái Nam"
          time="25p"
          content="Đây là 1 bài đăng"
          liked
          likes={20}
          comments={10}
        />
        <News
          avatar={require("../../assets/avatar.jpg")}
          name="Lương Thái Nam"
          time="25p"
          content="Đây là 1 bài đăng"
          likes={20}
          comments={10}
        />
        <News
          avatar={require("../../assets/avatar.jpg")}
          name="Lương Thái Nam"
          time="25p"
          content="Đây là 1 bài đăng"
          likes={20}
          comments={10}
        />
        <News
          avatar={require("../../assets/avatar.jpg")}
          name="Lương Thái Nam"
          time="25p"
          content="Đây là 1 bài đăng"
          likes={20}
          comments={10}
        />
        <News
          avatar={require("../../assets/avatar.jpg")}
          name="Lương Thái Nam"
          time="25p"
          content="Đây là 1 bài đăng"
          likes={20}
          comments={10}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    width: "100%",
    backgroundColor: COLOR.gray
  }
});

export default HomePage;
