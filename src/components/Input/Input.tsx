import { TextInputProps } from "react-native";
import { Container, InputText, InputLabel, InputSizeStyleType } from "./styles";

type Props = TextInputProps & {
  type?: InputSizeStyleType;
  label?: string;
};

export function Input({ label, type = "INPUT", ...rest }: Props) {
  return (
    <Container {...rest}>
      <InputLabel>{label}</InputLabel>
      <InputText type={type} />
    </Container>
  );
}
