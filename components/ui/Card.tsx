import { Colors } from "@/constants/Colors";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 30,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
});
