import { useState } from "react";
import { FlatList } from "react-native";
import { Container, DataText, MealsContainer } from "./styles";
import { Meal } from "components/Meal";
import { useNavigation } from "@react-navigation/native";

const MealData = {
  date: "12.08.22",
  meals: [
    {
      time: "20:00",
      meal: "X-tudo",
      inDiet: false,
    },
    {
      time: "16:00",
      meal: "Whey protein com leite",
      inDiet: true,
    },
    {
      time: "12:30",
      meal: "Salada cesar com frango...",
      inDiet: true,
    },
    {
      time: "09:30",
      meal: "Vitamina de banana com...",
      inDiet: true,
    },
  ],
};

const MealData2 = {
  date: "12.08.23",
  meals: [
    {
      time: "21:00",
      meal: "X-tudo",
      inDiet: false,
    },
    {
      time: "11:00",
      meal: "Whey protein com leite",
      inDiet: true,
    },
    {
      time: "11:30",
      meal: "Salada cesar com frango...",
      inDiet: true,
    },
    {
      time: "09:30",
      meal: "Vitamina de banana com...",
      inDiet: true,
    },
  ],
};

const MealData3 = {
  date: "12.08.24",
  meals: [
    {
      time: "24:10",
      meal: "X-tudo",
      inDiet: false,
    },
    {
      time: "14:10",
      meal: "Whey protein com leite",
      inDiet: true,
    },
    {
      time: "14:20",
      meal: "Salada cesar com frango...",
      inDiet: true,
    },
    {
      time: "19:10",
      meal: "Vitamina de banana com...",
      inDiet: true,
    },
  ],
};

export function Meals() {
  const [MealsData, setMealsData] = useState([MealData, MealData2, MealData3]);

  const navigation = useNavigation();

  function handleMealClick() {
    navigation.navigate("meal", { id: "1" });
  }

  return (
    <Container>
      <FlatList
        data={MealsData}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <MealsContainer>
            <DataText>{item.date}</DataText>
            <FlatList
              data={item.meals}
              keyExtractor={(item) => item.time}
              renderItem={({ item }) => (
                <Meal
                  time={item.time}
                  meal={item.meal}
                  inDiet={item.inDiet}
                  onPress={handleMealClick}
                />
              )}
            />
          </MealsContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
