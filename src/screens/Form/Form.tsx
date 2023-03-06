import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
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
import { mealGetById } from "storage/Meal/mealGetById";
import { mealUpdate } from "storage/Meal/mealUpdate";

type RouteParams = {
  id: string;
  date: string;
};

const initalMealData = {
  id: "",
  name: "",
  description: "",
  time: "",
};

export function Form() {
  const route = useRoute();
  const { id, date } = route.params as RouteParams;
  const navigation = useNavigation();

  const [inputDate, setInputDate] = useState("");
  const [meal, setMeal] = useState<mealDTO>(initalMealData);

  function isFieldEmpty() {
    if (date.length === 0 && inputDate.length === 0 && inputDate.length < 6)
      return true;

    if (meal.inDiet === undefined || meal.time.length < 5) return true;

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
      try {
        await mealAdd(inputDate, { ...meal, id: newMealId });

        navigation.navigate("feedback", { inDiet: meal.inDiet ?? false });
      } catch (error) {
        throw error;
      }
    }
  }

  async function handleUpdateMeal() {
    console.log("meal: ", meal);
    if (isFieldEmpty())
      Alert.alert(
        "Campo vazio",
        "Verifique se todos os campos estão preenchidos! ou complete-os"
      );
    else {
      try {
        await mealUpdate(id, date, inputDate, meal);

        navigation.navigate("meal", { id: id, date: inputDate });
      } catch (error) {
        throw error;
      }
    }
  }

  async function fetchMeal() {
    if (id && date) {
      const meal = await mealGetById(id, date);
      setMeal(meal);
      setInputDate(date);
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container>
      <InfoCard
        type="FORMHEADER"
        title={id ? "Editar refeição" : "Nova refeição"}
      />

      <Content>
        <FormContainer>
          <Input
            label="Nome"
            value={meal.name}
            onChangeText={(text) => setMeal({ ...meal, name: text })}
          />
          <Input
            label="Descrição"
            type="TEXTAREA"
            value={meal.description}
            style={{ textAlignVertical: "top" }}
            onChangeText={(text) => setMeal({ ...meal, description: text })}
          />

          <InputDataTime>
            <Input
              label="Data"
              style={{ marginRight: 20 }}
              value={formatDate(inputDate)}
              maxLength={8}
              onChangeText={(text) => setInputDate(text)}
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
        {id ? (
          <Button text="Salvar alterações" onPress={handleUpdateMeal}></Button>
        ) : (
          <Button text="Cadastrar refeição" onPress={handleAddNewMeal}></Button>
        )}
      </Content>
    </Container>
  );
}
