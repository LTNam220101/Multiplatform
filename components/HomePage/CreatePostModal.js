import React, { useRef } from "react";
import {
  Alert,
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "../../styles/colors";

const CreatePostModal = ({ modalVisible, setModalVisible }) => {
  const ref = useRef();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.return} onPress={()=>setModalVisible(false)}>
            <Ionicons
              name={"arrow-back-outline"}
              size={30}
              color={COLOR.black}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Tạo bài viết</Text>
          <Button
            title="ĐĂNG"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <View style={styles.user}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={styles.image}
          />
          <Text style={styles.userName}>Luong Nam</Text>
        </View>
        <Pressable style={styles.input} onPress={() => ref.current.focus()}>
          <TextInput
            ref={ref}
            style={styles.content}
            multiline={true}
            cursorColor={COLOR.blue}
            placeholder={"Bạn đang nghĩ gì?"}
          ></TextInput>
        </Pressable>
        <View style={styles.bottom}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOR.white,
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
    padding: 10,
    paddingBottom: 5,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray
  },
  return: {
    paddingRight: 5
  },
  text: {
    marginBottom: 4,
    alignSelf: "center",
    flex: 1,
    fontSize: 18
  },
  user: {
    padding: 10,
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  content: {
    flexWrap: "wrap",
    fontSize: 18
  }
});

export default CreatePostModal;
