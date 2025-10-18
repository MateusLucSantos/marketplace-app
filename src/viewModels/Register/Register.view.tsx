import { FC } from "react";
import { Text, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  userData,
  setUserData,
}) => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};
