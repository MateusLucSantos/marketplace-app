import { Redirect } from "expo-router";

export default function App() {
  const userDate = null;

  if (userDate) {
    return <Redirect href={"/(private)/home"} />;
  }

  return <Redirect href={"/login"} />;
}
