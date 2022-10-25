import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../styles/colors";

const CommentItem = ({
  avatar,
  name,
  content,
  time,
  likes,
  liked,
  hasChild
}) => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.img} />
      <View style={styles.left}>
        <View style={styles.comment}>
          <Text style={styles.name}>{name}</Text>
          <Text>{content}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.like}>
            <Text>{time}</Text>
            <Text>Thích</Text>
            <Text>Phản hồi</Text>
          </View>
          {likes > 0 && (
            <View style={styles.likes}>
              <Text>{likes}</Text>
              <MaterialCommunityIcons
                name="thumb-up"
                size={15}
                style={styles.icon}
              />
            </View>
          )}
        </View>
        {hasChild && (
          <CommentItem
            avatar={require("../../assets/avatar.jpg")}
            name={"Lương Thái Nam"}
            content={"Đây là comment"}
            time={"25p"}
            likes={20}
            liked
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row"
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10
  },
  left: {
    flex: 1
  },
  comment: {
    padding: 10,
    paddingTop: 4,
    paddingBottom: 7,
    backgroundColor: COLOR.grayBackground,
    borderRadius: 10
  },
  name: {
    fontWeight: "bold"
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10
  },
  like: {
    width: 160,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 10,
    marginRight: 20,
    gap: 10
  },
  likes: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    color: COLOR.active,
    marginLeft: 3
  }
});

export default CommentItem;
