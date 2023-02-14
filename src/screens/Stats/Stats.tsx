import { InfoCard } from "components/InfoCard";
import { NotInDietCount } from "./styles";
import { InDietCount } from "./styles";
import { InDietCountContainer } from "./styles";
import { Container, StatsContent, Title } from "./styles";

export function Stats() {
  return (
    <Container>
      <InfoCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        type="HEADER"
        value="GOOD"
      />
      <StatsContent>
        <Title>Estatísticaas gerais</Title>
        <InfoCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          type="INFOCARD"
          value="NORMAL"
        />

        <InfoCard
          title="109"
          subtitle="refeições registradas"
          type="INFOCARD"
          value="NORMAL"
        />
        <InDietCountContainer>
          <InDietCount>
            <InfoCard
              title="99"
              subtitle="refeições dentro da dieta"
              type="INFOCARD"
              value="GOOD"
            />
          </InDietCount>

          <NotInDietCount>
            <InfoCard
              title="10"
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
