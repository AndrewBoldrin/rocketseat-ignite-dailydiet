import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700}
    padding: 24px;
`;

export const MealsText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const MealsContainer = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const DataText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Meals = styled.View`
  margin-bottom: 32px;
`;
