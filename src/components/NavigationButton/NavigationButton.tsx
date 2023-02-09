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
  return (
    <Container {...rest} isOpen={isOpen}>
      {isOpen ? <GoBack color={type} /> : <Go color={type} />}
    </Container>
  );
}
