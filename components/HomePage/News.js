import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import CommentsModal from "../CommentModal/CommentsModal";

const News = ({
  avatar,
  name,
  time,
  content,
  images,
  video,
  likes,
  liked,
  comments
}) => {
  const [like, setLike] = useState(liked);
  const [modalVisible, setModalVisible] = useState(false);

  const onLikeNews = () => {
    setLike((pre) => !pre);
  };

  return (
    <View style={styles.container}>
      <CommentsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        like={like}
        setLike={setLike}
      />
      <TouchableHighlight
        style={styles.top}
        onPress={() => setModalVisible(true)}
        underlayColor="#e0e0e0"
        activeOpacity={0.05}
      >
        <>
          <Image source={avatar} style={styles.img} />
          <View style={styles.text}>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.time, styles.gray]}>{time}</Text>
          </View>
          <TouchableOpacity style={styles.dots}>
            <MaterialCommunityIcons name="dots-horizontal" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close}>
            <MaterialCommunityIcons name="close" size={25} />
          </TouchableOpacity>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => setModalVisible(true)}
        underlayColor="#e0e0e0"
        activeOpacity={0.05}
      >
        <Text style={styles.content}>{content}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.like}
        onPress={() => setModalVisible(true)}
        underlayColor="#e0e0e0"
        activeOpacity={0.05}
      >
        <>
          <Text style={styles.gray}>{likes} lượt thích</Text>
          <Text style={styles.gray}>{comments} bình luận</Text>
        </>
      </TouchableHighlight>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={onLikeNews}>
          <MaterialCommunityIcons
            name={like ? "thumb-up" : "thumb-up-outline"}
            size={15}
            color={like ? "#3a86e9" : "#9F9F9F"}
            style={styles.icon}
          />
          <Text style={like ? styles.button_like : styles.gray}>Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons
            name={"comment-outline"}
            size={15}
            color={"#9F9F9F"}
            style={styles.icon}
          />
          <Text style={styles.gray}>Bình Luận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 11
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 7
  },
  text: {
    flex: 1
  },
  name: {
    fontWeight: "bold"
  },
  time: {
    fontWeight: "light",
    fontSize: 12,
    tintColor: "#606770"
  },
  dots: {
    alignItems: "flex-start",
    textAlign: "start",
    marginRight: 20
  },
  close: {
    alignItems: "flex-start",
    marginRight: -5
  },
  content: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 11,
    paddingRight: 11,
    color: "#000"
  },
  like: {
    color: "#333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 11,
    paddingRight: 11
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#F2F3F5",
    paddingLeft: 11,
    paddingRight: 11
  },
  button: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  icon: {
    marginRight: 5
  },
  button_like: {
    color: "#3a86e9"
  },
  gray: {
    color: "#606770"
  }
});

export default News;
