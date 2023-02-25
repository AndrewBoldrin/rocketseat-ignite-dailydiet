import { FeedbackMessage } from "components/FeedbackMessage";
import { Container, FeedbackImage } from "./styles";
import positive_feedback from "assets/positive_feedback.png";
import negative_feedback from "assets/negative_feedback.png";
import { Button } from "components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  inDiet: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { inDiet } = route.params as RouteParams;
  const navigation = useNavigation();

  function handleGoToHome(): void {
    navigation.navigate("home");
  }

  return (
    <Container>
      <FeedbackMessage inDiet={inDiet} />
      <FeedbackImage source={inDiet ? positive_feedback : negative_feedback} />
      <Button
        type="NAVEGATION"
        text="Ir para a página inicial"
        style={{ marginTop: 32 }}
        onPress={handleGoToHome}
      ></Button>
    </Container>
  );
}
