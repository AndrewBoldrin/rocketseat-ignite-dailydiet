import { InfoCard } from "components/InfoCard";
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
      </StatsContent>
    </Container>
  );
}
