import styled, { css } from "styled-components/native";

export type CardValue = "NORMAL" | "GOOD" | "BAD";
export type CardType = "HEADERCARD" | "HEADER" | "INFOCARD";

type Props = {
  type?: CardType;
  bgColor?: string;
};

export const Container = styled.View<Props>`
  padding: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;

  ${({ type }) =>
    type === "HEADER" &&
    css`
      left: 0;
      right: 0;
      padding: 56px 24px 66px 24px !important;
    `};

  ${({ type }) =>
    type === "HEADERCARD" &&
    css`
      position: relative;
      width: 100%;
      padding: 8px 8px 20px 8px !important;
    `};

  ${({ type }) =>
    type === "INFOCARD" &&
    css`
      width: 100%;
      padding: 16px;
      margin-bottom: 12px;
    `};
`;

export const Title = styled.Text<Props>`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  ${({ type }) =>
    type === "INFOCARD" &&
    css`
      margin-bottom: 8px;
      font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    `};

  ${({ type }) =>
    type === "HEADERCARD" &&
    css`
      margin-bottom: 2px;
    `};
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
