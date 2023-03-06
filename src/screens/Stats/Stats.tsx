import { useFocusEffect } from "@react-navigation/native";
import { InfoCard } from "components/InfoCard";
import { useCallback, useState } from "react";
import { mealGetAll } from "storage/Meal/mealGetAll";
import { orderByRecentDate } from "utils/order";
import { NotInDietCount } from "./styles";
import { InDietCount } from "./styles";
import { InDietCountContainer } from "./styles";
import { Container, StatsContent, Title } from "./styles";

type StatsType = {
  meals: number;
  inDiet: number;
  notInDiet: number;
  percentInDiet: number;
  countInARow: number;
};

export function Stats() {
  const [countStats, setCountStats] = useState<StatsType>({
    meals: 0,
    inDiet: 0,
    notInDiet: 0,
    percentInDiet: 0,
    countInARow: 0,
  });

  const getStats = async () => {
    try {
      const storagedMeals = await mealGetAll();

      var numTotalMeals = 0;
      var numMealsInDiet = 0;
      var numMealInDietInARow = 0;
      var countInARow = 0;

      const orderedKeys = orderByRecentDate(Object.keys(storagedMeals));

      orderedKeys.map((key) => {
        storagedMeals[key].forEach((meal) => {
          numTotalMeals += 1;
          if (meal.inDiet) {
            countInARow += 1;
          } else {
            if (countInARow > numMealInDietInARow) {
              numMealInDietInARow = countInARow;
              countInARow = 0;
            }
          }
          if (meal.inDiet) numMealsInDiet += 1;
        });
      });

      if (countInARow > numMealInDietInARow) {
        numMealInDietInARow = countInARow;
        countInARow = 0;
      }

      const numMealNotInDiet = numTotalMeals - numMealsInDiet;
      const percentInDiet = (numMealsInDiet / numTotalMeals) * 100;

      const newStats = {
        meals: numTotalMeals,
        inDiet: numMealsInDiet,
        notInDiet: numMealNotInDiet,
        percentInDiet: percentInDiet,
        countInARow: numMealInDietInARow,
      };

      setCountStats(newStats);
    } catch (error) {
      console.log("Não foi possível carregar as estatisticas");
    }
  };

  useFocusEffect(
    useCallback(() => {
      getStats();
    }, [])
  );

  return (
    <Container>
      <InfoCard
        title={`${countStats.percentInDiet.toFixed(2)}%`}
        subtitle="das refeições dentro da dieta"
        type="HEADER"
        value={countStats.percentInDiet >= 70 ? "GOOD" : "BAD"}
      />
      <StatsContent>
        <Title>Estatísticaas gerais</Title>
        <InfoCard
          title={countStats.countInARow}
          subtitle="melhor sequência de pratos dentro da dieta"
          type="INFOCARD"
          value="NORMAL"
        />

        <InfoCard
          title={countStats.meals}
          subtitle="refeições registradas"
          type="INFOCARD"
          value="NORMAL"
        />
        <InDietCountContainer>
          <InDietCount>
            <InfoCard
              title={countStats.inDiet}
              subtitle="refeições dentro da dieta"
              type="INFOCARD"
              value="GOOD"
            />
          </InDietCount>

          <NotInDietCount>
            <InfoCard
              title={countStats.notInDiet}
              subtitle="refeições fora da dieta"
              type="INFOCARD"
              value="BAD"
            />
          </NotInDietCount>
        </InDietCountContainer>
      </StatsContent>
    </Container>
  );
}
