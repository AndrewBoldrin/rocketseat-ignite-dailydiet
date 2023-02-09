import { Container } from "./styles";
import { Header } from "components/Header";
import { InfoCard } from "components/InfoCard";

export function Home() {
  return (
    <Container>
      <Header />
      <InfoCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        type="HEADERCARD"
        value="GOOD"
      />
    </Container>
  );
}
