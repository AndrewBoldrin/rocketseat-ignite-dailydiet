import styled, { css } from "styled-components/native";

type OptionType = {
  inDiet?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding-left: 24px;
  padding-right: 24px;

  top: -28px;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px;
`;

export const MealName = styled.Text`
  margin-top: 40px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const DataTime = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DataTimeValue = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const InDietLabel = styled.View`
  flex-direction: row;
  align-self: flex-start;
  align-items: center;

  margin-top: 24px;
  border-radius: 1000px;

  padding: 8px 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const InDietIcon = styled.Text<OptionType>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ theme, inDiet }) => css`
    background-color: ${inDiet
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const InDietText = styled.Text`
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
