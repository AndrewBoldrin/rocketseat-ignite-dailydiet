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

export function Form() {
  return (
    <Container>
      <InfoCard type="FORMHEADER" title="Nova Refeição" />

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
            <Button text="Sim" type="OPTION" style={{ marginRight: 8 }}>
              <InDietIcon InDiet />
            </Button>

            <Button text="Não" type="OPTION">
              <InDietIcon />
            </Button>
          </ButtonOptionContainer>
        </FormContainer>
        <Button text="Cadastrar refeição"></Button>
      </Content>
    </Container>
  );
}
