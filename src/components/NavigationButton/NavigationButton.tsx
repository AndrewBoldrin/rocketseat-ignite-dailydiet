import { useNavigation } from "@react-navigation/native";
import { CardValue } from "components/InfoCard/styles";
import { TouchableOpacityProps } from "react-native";
import { Container, Go, GoBack } from "./styles";

type Props = TouchableOpacityProps & {
  isOpen?: boolean;
  type?: CardValue;
};

export function NavigationButton({
  isOpen = false,
  type = "GOOD",
  ...rest
}: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.navigate("home");
  }

  function openStats() {
    navigation.navigate("stats");
  }

  return (
    <Container {...rest} isOpen={isOpen} onPress={isOpen ? goBack : openStats}>
      {isOpen ? <GoBack color={type} /> : <Go color={type} />}
    </Container>
  );
}
