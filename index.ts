import { CustomButton } from "components/CustomButton";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

export { CustomButton };
