import { View } from "react-native";
import VarScreen from "./var";
import KondScreen from "./kond";
import LoopScreen from "./loop";
import OpacityScreen from "./opacity";
import ArrScreen from "./arr";
import FuncScreen from "./func";
import CompScreen from "./comp"

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
      <ArrScreen/>
      <FuncScreen/>
      <CompScreen/>
    </View>
  );
}
