import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))``;
