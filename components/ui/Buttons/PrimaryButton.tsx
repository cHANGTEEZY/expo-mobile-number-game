import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  children: string | React.ReactNode;
  color?: string;
  onPress?: () => void | any;
}

const PrimaryButton = ({ children, color, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressedData) =>
          pressedData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
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
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    textAlign: "center",
    padding: 8,
    fontFamily: "open-sans",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
