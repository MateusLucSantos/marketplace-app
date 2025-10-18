import { Redirect, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const userDate = null;

  if (userDate) {
    return <Redirect href={"/(private)/home"} />;
  }

  return <Redirect href={"/login"} />;
}
