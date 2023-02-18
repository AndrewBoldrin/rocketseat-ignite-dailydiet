import { StatusBar } from "react-native";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Loading } from "components/Loading";
import { Feedback } from "screens/Feedback";
import { ViewMeal } from "screens/ViewMeal";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <ViewMeal /> : <Loading />}
    </ThemeProvider>
  );
}
