import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { COLOR } from "../../styles/colors";
import CommentItem from "./CommentItem";

const CommentsModal = ({ modalVisible, setModalVisible, like, setLike }) => {
  return (
    <GestureRecognizer
      style={{ flex: 1 }}
      onSwipeDown={() => setModalVisible(false)}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.top}>
              <Text style={styles.modalText}>233 lượt thích</Text>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setLike(!like)}
              >
                <MaterialCommunityIcons
                  name={like ? "thumb-up" : "thumb-up-outline"}
                  size={20}
                  color={like ? COLOR.active : COLOR.grayTime}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <CommentItem
                avatar={require("../../assets/avatar.jpg")}
                name={"Lương Thái Nam"}
                content={"Đây là comment"}
                time={"25p"}
                likes={20}
                liked
                hasChild
              />
              <CommentItem
                avatar={require("../../assets/avatar.jpg")}
                name={"Lương Thái Nam"}
                content={
                  "Đây là comment dài vcl dài nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
                }
                time={"25p"}
                likes={20}
                liked
              />
              <CommentItem
                avatar={require("../../assets/avatar.jpg")}
                name={"Lương Thái Nam"}
                content={
                  "Đây là comment dài vcl dài nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
                }
                time={"25p"}
                likes={20}
                liked
              />
              <CommentItem
                avatar={require("../../assets/avatar.jpg")}
                name={"Lương Thái Nam"}
                content={
                  "Đây là comment dài vcl dài nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
                }
                time={"25p"}
                likes={20}
                liked
              />
              <CommentItem
                avatar={require("../../assets/avatar.jpg")}
                name={"Lương Thái Nam"}
                content={
                  "Đây là comment dài vcl dài nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
                }
                time={"25p"}
                likes={20}
                liked
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOR.white,
    borderRadius: 10,
    padding: 11,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5
  },
  top: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default CommentsModal;
