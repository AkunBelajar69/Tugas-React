import { View } from "react-native";
import VarScreen from "./var";
import KondScreen from "./kond";
import LoopScreen from "./loop";
import OpacityScreen from "./opacity";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VarScreen/>
      <KondScreen/>
      <LoopScreen/>
      <OpacityScreen/>
    </View>
  );
}
