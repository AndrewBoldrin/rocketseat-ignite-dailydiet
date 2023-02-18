import { FeedbackMessage } from "components/FeedbackMessage";
import { Container } from "./styles";

export function Feedback() {
  return (
    <Container>
      <FeedbackMessage inDiet />
    </Container>
  );
}
