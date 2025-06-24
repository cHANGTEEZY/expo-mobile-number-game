import React from "react";
import { Text, View } from "react-native";

interface Props {
  children: string;
  color?: string;
}

const PrimaryButton = ({ children, color }: Props) => {
  return (
    <View>
      <Text
        style={{
          color: color,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default PrimaryButton;
