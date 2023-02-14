import styled from "styled-components/native";

export const Container = styled.View``;

export const StatsContent = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;

  top: -32px;

  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px;
`;

export const Title = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const InDietCountContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const InDietCount = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export const NotInDietCount = styled.View`
  flex: 1;
`;
