import React from "react";
import { Mulish } from "styles";
import { styled, s } from "lib/styled";
import { Text as TextBase } from "react-native";

interface Props {
  children: any;
  otherProps?: any;
}

const StandardText = styled(TextBase)(
  s("text-base text-black", { ...Mulish.Regular })
);

const Text: React.FC<Props> = ({ children, ...otherProps }: Props) => {
  return <StandardText {...otherProps}>{children}</StandardText>;
};

export { Text };
