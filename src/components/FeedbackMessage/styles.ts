import styled from "styled-components/native";

type Props = {
  inDiet: boolean;
};

export const Container = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const HighLightText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
