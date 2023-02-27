import styled, { css } from "styled-components/native";

export type InputSizeStyleType = "INPUT" | "TEXTAREA";

type InputStyleType = {
  type: InputSizeStyleType;
};

export const Container = styled.View<InputStyleType>`
  flex: 1;
  max-height: ${({ type }) => (type === "INPUT" ? "70px" : "142px")};
  min-height: ${({ type }) => (type === "INPUT" ? "70px" : "142px")};
  margin-bottom: 24px;
`;

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
    padding: 14px;

    border: 1px solid ${theme.COLORS.GRAY_500};
    border-radius: 6px;

    color: ${theme.COLORS.GRAY_100};
  `}
`;
