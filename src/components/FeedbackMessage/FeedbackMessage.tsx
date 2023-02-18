import { Container, HighLightText, Subtitle, Title } from "./styles";

type Props = {
  inDiet?: boolean;
};

export function FeedbackMessage({ inDiet = false }: Props) {
  return (
    <Container>
      <Title inDiet={inDiet}>{inDiet ? "Continua assim!" : "Que pena!"}</Title>
      {inDiet ? (
        <Subtitle>
          Você continua <HighLightText>dentro da dieta. </HighLightText>Muito
          bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <HighLightText>saiu da dieta </HighLightText>dessa vez, mas
          continue se esforçando e não desista!
        </Subtitle>
      )}
    </Container>
  );
}
