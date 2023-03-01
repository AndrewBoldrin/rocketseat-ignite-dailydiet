import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "components/Button";
import { InfoCard } from "components/InfoCard";
import { Input } from "components/Input";
import {
  Container,
  FormContainer,
  Content,
  InputDataTime,
  OptionsLabel,
  InDietIcon,
  ButtonOptionContainer,
} from "./styles";
import { mealDTO } from "storage/Meal/mealStorageDTO";
import { mealAdd } from "storage/Meal/mealAdd";
import { generateId } from "utils/generateId";
import { formatDate } from "utils/formatDate";
import { Alert } from "react-native";
import { formatTime } from "utils/formatTime";

type RouteParams = {
  mealId: string;
};

const initalMealData = {
  id: "",
  name: "",
  description: "",
  time: "",
};

export function Form() {
  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  const navigation = useNavigation();

  const [date, setDate] = useState("");
  const [meal, setMeal] = useState<mealDTO>(initalMealData);

  function isFieldEmpty() {
    if (
      date.length === 0 ||
      meal.inDiet === undefined ||
      date.length < 8 ||
      meal.time.length < 5
    )
      return true;

    Object.values(meal).map((value: string | boolean) => {
      if (value.toString().length === 0) return true;
    });

    return false;
  }

  async function handleAddNewMeal() {
    const newMealId = generateId();

    if (isFieldEmpty())
      Alert.alert(
        "Campo vazio",
        "Verifique se todos os campos estão preenchidos! ou complete-os"
      );
    else {
      setMeal({ ...meal, id: newMealId });

      await mealAdd(date, meal);

      navigation.navigate("feedback", { inDiet: true });
    }
  }

  function handleUpdateMeal() {
    navigation.navigate("meal", { id: "" });
  }

  return (
    <Container>
      <InfoCard
        type="FORMHEADER"
        title={mealId ? "Editar refeição" : "Nova refeição"}
      />

      <Content>
        <FormContainer>
          <Input
            label="Nome"
            onChangeText={(text) => setMeal({ ...meal, name: text })}
          />
          <Input
            label="Descrição"
            type="TEXTAREA"
            onChangeText={(text) => setMeal({ ...meal, description: text })}
          />

          <InputDataTime>
            <Input
              label="Data"
              style={{ marginRight: 20 }}
              value={formatDate(date)}
              maxLength={8}
              onChangeText={(text) => setDate(formatDate(text))}
            />
            <Input
              label="Hora"
              value={formatTime(meal.time)}
              maxLength={5}
              onChangeText={(text) =>
                setMeal({ ...meal, time: formatTime(text) })
              }
            />
          </InputDataTime>

          <OptionsLabel>Está dentro da dieta ?</OptionsLabel>
          <ButtonOptionContainer>
            <Button
              text="Sim"
              type="OPTION"
              inDiet={meal.inDiet && meal.inDiet ? true : undefined}
              style={{ marginRight: 8 }}
              onPress={() => setMeal({ ...meal, inDiet: true })}
            >
              <InDietIcon InDiet />
            </Button>

            <Button
              text="Não"
              inDiet={meal.inDiet === false ? false : undefined}
              type="OPTION"
              onPress={() => setMeal({ ...meal, inDiet: false })}
            >
              <InDietIcon />
            </Button>
          </ButtonOptionContainer>
        </FormContainer>
        {mealId ? (
          <Button text="Salvar alterações" onPress={handleUpdateMeal}></Button>
        ) : (
          <Button text="Cadastrar refeição" onPress={handleAddNewMeal}></Button>
        )}
      </Content>
    </Container>
  );
}
