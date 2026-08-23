import { View } from "react-native";
import VarScreen from "./var";
import KondScreen from "./kond";
import LoopScreen from "./loop";

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
    </View>
  );
}
