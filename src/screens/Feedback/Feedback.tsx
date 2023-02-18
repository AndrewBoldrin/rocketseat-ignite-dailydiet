import { FeedbackMessage } from "components/FeedbackMessage";
import { Container, FeedbackImage } from "./styles";
import positive_feedback from "assets/positive_feedback.png";
import negative_feedback from "assets/negative_feedback.png";

export function Feedback() {
  const inDiet = false;

  return (
    <Container>
      <FeedbackMessage inDiet={inDiet} />
      <FeedbackImage source={inDiet ? positive_feedback : negative_feedback} />
    </Container>
  );
}
