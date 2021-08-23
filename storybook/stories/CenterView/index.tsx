// storybook/stories/CenterView/index.tsx

import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

interface Props {
  children: any;
}

export const CenterView: React.FC<Props> = ({ children }: Props) => {
  return <View style={styles.main}>{children}</View>;
};
