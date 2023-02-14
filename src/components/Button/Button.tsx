import { ReactElement } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ActionText, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  text: string;
  children?: ReactElement;
};

export function Button({ type = "ACTION", text, children, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {children}
      <ActionText type={type}>{text}</ActionText>
    </Container>
  );
}
