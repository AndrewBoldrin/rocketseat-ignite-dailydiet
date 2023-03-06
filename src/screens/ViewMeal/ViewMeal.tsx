import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Button } from "components/Button";
import { InfoCard } from "components/InfoCard";
import { Modal } from "components/Modal";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { mealGetAll } from "storage/Meal/mealGetAll";
import { mealGetById } from "storage/Meal/mealGetById";
import { mealDTO } from "storage/Meal/mealStorageDTO";
import { useTheme } from "styled-components/native";
import { formatDate } from "utils/formatDate";
import {
  Container,
  Content,
  DataTime,
  DataTimeValue,
  InDietLabel,
  InDietIcon,
  MealDescription,
  MealName,
  InDietText,
} from "./styles";

type RouteParams = {
  date: string;
  id: string;
};

export function ViewMeal() {
  const [onModalOpen, setOnModalOpen] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { id, date } = route.params as RouteParams;
  const [meal, setMeal] = useState<mealDTO>();

  const inDiet = true;

  function onModalClose() {
    setOnModalOpen(false);
  }

  function handleEditMeal() {
    navigation.navigate("form", { id: id, date: date });
  }

  async function fetchMeal() {
    const meal = await mealGetById(id, date);
    setMeal(meal);
  }
  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [date])
  );

  return (
    <Container>
      <InfoCard
        type="FORMHEADER"
        title="Refeição"
        value={inDiet ? "GOOD" : "BAD"}
      />
      <Content>
        <MealName>{meal?.name}</MealName>
        <MealDescription>{meal?.description}</MealDescription>

        <DataTime>Data e hora</DataTime>
        <DataTimeValue>{`${formatDate(date, "/")} às ${
          meal?.time
        }`}</DataTimeValue>

        <InDietLabel>
          <InDietIcon inDiet={meal?.inDiet} />
          <InDietText>
            {inDiet ? "dentro da dieta" : "fora da dieta"}
          </InDietText>
        </InDietLabel>

        <Button
          type="ACTION"
          text="Editar refeição"
          style={{ marginTop: "auto", marginBottom: 9 }}
          onPress={handleEditMeal}
        >
          <PencilSimpleLine color={theme.COLORS.WHITE} />
        </Button>

        <Button
          type="DELETE"
          text="Excluir refeição"
          onPress={() => setOnModalOpen(true)}
        >
          <Trash />
        </Button>
      </Content>

      {meal && (
        <Modal
          isOpen={onModalOpen}
          date={date}
          id={id}
          onClose={onModalClose}
          title="Deseja realmente excluir o registro da refeição?"
        />
      )}
    </Container>
  );
}
