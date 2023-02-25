import { ReactElement } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ActionText, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  text: string;
  children?: ReactElement;
  inDiet?: boolean | null;
};

export function Button({
  type = "ACTION",
  text,
  inDiet,
  children,
  ...rest
}: Props) {
  return (
    <Container type={type} inDiet={inDiet} {...rest}>
      {children}
      <ActionText type={type}>{text}</ActionText>
    </Container>
  );
}
