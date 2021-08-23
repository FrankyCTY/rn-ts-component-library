import { storiesOf } from "@storybook/react-native";
import React from "react";
// import { Text } from "components/Text/Text";
import { Text } from "components/Text";
import { CustomButton } from "../../../src/components/CustomButton";
import { CenterView } from "../CenterView";

storiesOf("Buttons/CustomButton", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <CustomButton onPress={() => console.log("You Pressed On Me")}>
      <Text>Hello what are you doing</Text>
    </CustomButton>
  ));
