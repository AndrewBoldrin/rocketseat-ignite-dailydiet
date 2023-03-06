import { useNavigation } from "@react-navigation/native";
import { Button } from "components/Button";
import { mealDeleteById } from "storage/Meal/mealDeleteById";
import { mealDTO } from "storage/Meal/mealStorageDTO";
import { Container, Box, Title, ActionContainer } from "./styles";

type Props = {
  title: string;
  isOpen: boolean;
  id: string;
  date: string;
  onClose: () => void;
};

export function Modal({ title, isOpen, date, id, onClose }: Props) {
  const navigation = useNavigation();

  async function closeModal(e: any) {
    e.stopPropagation();
    onClose();
  }

  async function handleDeleteMeal() {
    try {
      if (id) await mealDeleteById(id, date);
      navigation.navigate("home");
      onClose();
    } catch (error) {
      throw error;
    }
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
              <Button
                type="ACTION"
                text="Sim, excluir"
                onPress={handleDeleteMeal}
              ></Button>
            </ActionContainer>
          </Box>
        </Container>
      )}
    </>
  );
}
