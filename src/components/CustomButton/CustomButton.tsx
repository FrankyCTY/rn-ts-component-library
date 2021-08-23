import React from "react";
import { Text } from "components/Text";
import { TouchableHighlight } from "react-native";

interface Props {
  onPress: () => void;
}

export const CustomButton: React.FC<Props> = ({ onPress }: Props) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>yo the import is working!</Text>
    </TouchableHighlight>
  );
};
