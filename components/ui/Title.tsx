import React from "react";
import { StyleSheet, Text } from "react-native";

type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "grey",
    maxWidth: "80%",
  },
});
