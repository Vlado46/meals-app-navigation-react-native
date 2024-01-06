import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subContainer: {
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
