import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;

  width: 100%;
  height: 100%;

  padding-left: 24px;
  padding-right: 24px;

  justify-content: center;
  aling-items: center;

  background-color: rgba(0, 0, 0, 0.25);
`;

export const Box = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 40px 21px 24px 24px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ActionContainer = styled.View`
  flex-direction: row;

  margin-top: 32px;
`;
