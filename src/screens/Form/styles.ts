import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type OptionType = {
  InDiet?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;

  top: -28px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px;
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const InputDataTime = styled.View`
  flex-direction: row;
`;

export const OptionsLabel = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-szie: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ButtonOptionContainer = styled.View`
  flex-direction: row;
`;

export const InDietIcon = styled.View<OptionType>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ theme, InDiet }) => css`
    background-color: ${InDiet
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;
