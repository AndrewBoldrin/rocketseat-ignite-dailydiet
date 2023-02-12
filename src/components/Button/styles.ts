import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps =
  | "ACTION"
  | "DELETE"
  | "OPTION"
  | "NAVEGATION";

type Props = {
  type?: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;

  ${({ theme, type }) =>
    type === "ACTION" &&
    css`
      background-color: ${theme.COLORS.GRAY_200};
    `}

  ${({ theme, type }) =>
    type === "DELETE" &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_100};
    `}

  ${({ theme, type }) =>
    type === "OPTION" &&
    css`
      background-color: ${theme.COLORS.GRAY_600};
    `}

    ${({ theme, type }) =>
    type === "NAVEGATION" &&
    css`
      max-width: 191px;
      background-color: ${theme.COLORS.GRAY_200};
    `}
`;

export const ActionText = styled(Text)<Props>`
  margin-left: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  ${({ theme, type }) =>
    (type === "OPTION" || type === "DELETE") &&
    css`
      color: ${theme.COLORS.GRAY_100};
    `};
`;
