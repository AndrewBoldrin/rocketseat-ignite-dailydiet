import { Container, MealsText } from "./styles";
import { Header } from "components/Header";
import { InfoCard } from "components/InfoCard";
import { Button } from "components/Button";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Meals } from "components/Meals";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("form", { mealId: "" });
  }

  return (
    <Container>
      <Header />
      <InfoCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        type="HEADERCARD"
        value="GOOD"
      />

      <MealsText>Refeições</MealsText>
      <Button type="ACTION" text="Nova refeição" onPress={handleNewMeal}>
        <Plus size={18} color={theme.COLORS.WHITE} />
      </Button>

      <Meals />
    </Container>
  );
}
