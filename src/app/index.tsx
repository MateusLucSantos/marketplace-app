import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>

      <TouchableOpacity onPress={() => router.navigate("login")}>
        <Text className="text-purple-base">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
