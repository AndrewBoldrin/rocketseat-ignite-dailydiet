import { StatusBar } from "react-native";
import theme from "./src/theme";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text>Font carregada</Text>
      ) : (
        <Text>A Foi não foi carregada</Text>
      )}
    </ThemeProvider>
  );
}
