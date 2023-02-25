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

type RouteParams = {
  mealId: string;
};

export function Form() {
  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  const navigation = useNavigation();

  const [inDiet, setInDiet] = useState<boolean | null>(null);

  function handleAddNewMeal() {
    navigation.navigate("feedback", { inDiet: true });
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
          <Input label="Nome" />
          <Input label="Descrição" type="TEXTAREA" />

          <InputDataTime>
            <Input label="Data" style={{ flex: 1, marginRight: 20 }} />
            <Input label="Hora" style={{ flex: 1 }} />
          </InputDataTime>

          <OptionsLabel>Está dentro da dieta ?</OptionsLabel>

          <ButtonOptionContainer>
            <Button
              text="Sim"
              type="OPTION"
              inDiet={inDiet ? inDiet : null}
              style={{ marginRight: 8 }}
              onPress={() => setInDiet(true)}
            >
              <InDietIcon InDiet />
            </Button>

            <Button
              text="Não"
              inDiet={!inDiet ? inDiet : null}
              type="OPTION"
              onPress={() => setInDiet(false)}
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
