import styled, { css } from "styled-components/native";

export type InputSizeStyleType = "INPUT" | "TEXTAREA";

type InputStyleType = {
  type: InputSizeStyleType;
};

export const Container = styled.View``;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-szie: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputText = styled.TextInput<InputStyleType>`
  ${({ theme, type }) => css`
    width: 100%;
    min-height: ${type === "INPUT" ? "48px" : "120px"};
    max-height: ${type === "INPUT" ? "48px" : "120px"};

    margin-top: 4px;
    margin-bottom: 24px;

    border: 1px solid ${theme.COLORS.GRAY_500};
    border-radius: 6px;
  `}
`;
