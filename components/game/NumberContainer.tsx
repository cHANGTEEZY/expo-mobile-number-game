import { Colors } from "@/constants/Colors";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 13 : 15,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
