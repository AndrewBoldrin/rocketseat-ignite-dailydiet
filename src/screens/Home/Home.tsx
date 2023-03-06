import {
  Container,
  DataText,
  MealsContainer,
  MealsText,
  Meals,
} from "./styles";
import { Header } from "components/Header";
import { InfoCard } from "components/InfoCard";
import { Button } from "components/Button";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealStorageDTO } from "storage/Meal/mealStorageDTO";
import { useCallback, useState } from "react";
import { mealGetAll } from "storage/Meal/mealGetAll";
import { Meal } from "components/Meal";
import { FlatList } from "react-native";
import { formatDate } from "utils/formatDate";
import { orderTime, orderByRecentDate } from "utils/order";

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [meals, setMeals] = useState<mealStorageDTO>({});

  function handleNewMeal() {
    navigation.navigate("form", { id: "", date: "" });
  }

  function handleMealClick(mealId: string, mealDate: string) {
    navigation.navigate("meal", { id: mealId, date: mealDate });
  }

  async function fetchMeals() {
    try {
      const storagedMeals = await mealGetAll();
      setMeals(storagedMeals);
      console.log(storagedMeals);
      return meals;
    } catch (error) {}
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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

      <MealsContainer>
        <FlatList
          data={orderByRecentDate(Object.keys(meals))}
          keyExtractor={(item) => item}
          renderItem={({ item: date }) => (
            <Meals>
              <DataText>{formatDate(date)}</DataText>
              <FlatList
                data={meals[date] ?? orderTime(meals[date])}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Meal
                    time={item.time}
                    meal={item.name}
                    inDiet={item.inDiet}
                    onPress={() => handleMealClick(item.id, date)}
                  />
                )}
              />
            </Meals>
          )}
          showsVerticalScrollIndicator={false}
        />
      </MealsContainer>
    </Container>
  );
}
