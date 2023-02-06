import { StatusBar } from "react-native";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
