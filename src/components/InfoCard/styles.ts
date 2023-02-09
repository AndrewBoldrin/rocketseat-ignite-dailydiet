import styled, { css } from "styled-components/native";

export type CardValue = "NORMAL" | "GOOD" | "BAD";
export type CardType = "HEADERCARD" | "HEADER" | "INFOCARD";

type Props = {
  type?: CardType;
  bgColor?: string;
};

export const Container = styled.View<Props>`
  padding: 16px;
  ${({ type }) =>
    type === "HEADER" &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      padding: 56px 24px 34px 24px !important;
    `};

  ${({ type }) =>
    type === "HEADERCARD" &&
    css`
      position: relative;
      width: 100%;
      padding: 8px 8px 20px 8px !important;
    `};
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
