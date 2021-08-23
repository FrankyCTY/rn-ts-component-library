import React from "react";
import { Text as TextBase } from "react-native";

interface Props {
  children: any;
}

const Text: React.FC<Props> = ({ children }: Props) => {
  return <TextBase>{children}</TextBase>;
};

export { Text };
