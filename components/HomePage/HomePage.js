import React from "react";
import { StyleSheet, View } from "react-native";
import News from "./News";

const HomePage = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  homePage: {
    width: "100%",
    backgroundColor: "#D9D9D9"
  }
});

export default HomePage;
