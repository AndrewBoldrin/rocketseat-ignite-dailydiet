import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps =
  | "ACTION"
  | "DELETE"
  | "OPTION"
  | "NAVEGATION";

type Props = {
  type?: ButtonTypeStyleProps;
  inDiet?: boolean | null;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  ${({ theme, type }) =>
    type !== "NAVEGATION" &&
    css`
      flex: 1;
      min-height: 50px;
      max-height: 50px;
    `}

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

  ${({ theme, type, inDiet }) =>
    type === "OPTION" &&
    css`
      background-color: ${inDiet === undefined
        ? theme.COLORS.GRAY_600
        : inDiet
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
      border: ${inDiet === undefined
        ? `none`
        : inDiet
        ? `1px solid ${theme.COLORS.GREEN_DARK}`
        : `1px solid ${theme.COLORS.RED_DARK}`};
    `}

    ${({ theme, type }) =>
    type === "NAVEGATION" &&
    css`
      padding: 16px 24px;
      background-color: ${theme.COLORS.GRAY_200};
    `}
`;

export const ActionText = styled(Text)<Props>`
  ${({ type }) =>
    type !== "NAVEGATION" &&
    css`
      margin-left: 12px;
    `}

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
