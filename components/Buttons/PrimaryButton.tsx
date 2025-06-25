import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  children: string;
  color?: string;
}

const PrimaryButton = ({ children, color }: Props) => {
  function pressHandler() {}

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressedData) =>
          pressedData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text
          style={[
            {
              color: color,
            },
            styles.buttonText,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    overflow: "hidden",
    margin: 4,
  },

  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    textAlign: "center",
    padding: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
