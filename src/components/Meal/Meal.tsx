import { TouchableOpacityProps } from "react-native";
import { Container, TimeText, MealText, InDiet } from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  meal: string;
  inDiet?: boolean;
};

export function Meal({ time, meal, inDiet = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TimeText>{time}</TimeText>
      <MealText>{meal}</MealText>
      <InDiet inDiet={inDiet} />
    </Container>
  );
}
