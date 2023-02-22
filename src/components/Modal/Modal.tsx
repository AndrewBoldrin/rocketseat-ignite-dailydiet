import { Button } from "components/Button";
import { Container, Box, Title, ActionContainer } from "./styles";

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ title, isOpen, onClose }: Props) {
  function closeModal(e: any) {
    e.stopPropagation();
    onClose();
  }

  return (
    <>
      {isOpen && (
        <Container onPress={closeModal}>
          <Box
            onStartShouldSetResponder={(event) => true}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <Title>{title}</Title>

            <ActionContainer>
              <Button
                type="DELETE"
                text="Cancelar"
                style={{ marginRight: 12 }}
                onPress={closeModal}
              ></Button>
              <Button type="ACTION" text="Sim, excluir"></Button>
            </ActionContainer>
          </Box>
        </Container>
      )}
    </>
  );
}
