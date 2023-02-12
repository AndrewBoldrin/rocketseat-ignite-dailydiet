import { ReactElement } from "react";
import { Container, ActionText, ButtonTypeStyleProps } from "./styles";

type Props = {
  type?: ButtonTypeStyleProps;
  text: string;
  children: ReactElement;
};

export function Button({ type = "ACTION", text, children }: Props) {
  return (
    <Container type={type}>
      {children}
      <ActionText type={type}>{text}</ActionText>
    </Container>
  );
}
