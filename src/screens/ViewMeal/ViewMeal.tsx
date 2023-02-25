import { useNavigation } from "@react-navigation/native";
import { Button } from "components/Button";
import { InfoCard } from "components/InfoCard";
import { Modal } from "components/Modal";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
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

export function ViewMeal() {
  const [onModalOpen, setOnModalOpen] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();

  const inDiet = true;

  function onModalClose() {
    setOnModalOpen(false);
  }

  function handleEditMeal() {
    navigation.navigate("form", { mealId: "1" });
  }

  return (
    <Container>
      <InfoCard
        type="FORMHEADER"
        title="Refeição"
        value={inDiet ? "GOOD" : "BAD"}
      />
      <Content>
        <MealName>Sanduíche</MealName>
        <MealDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </MealDescription>

        <DataTime>Data e hora</DataTime>
        <DataTimeValue>12/08/2022 às 16:00</DataTimeValue>

        <InDietLabel>
          <InDietIcon inDiet />
          <InDietText>dentro da dieta</InDietText>
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

      <Modal
        isOpen={onModalOpen}
        onClose={onModalClose}
        title="Deseja realmente excluir o registro da refeição?"
      />
    </Container>
  );
}
