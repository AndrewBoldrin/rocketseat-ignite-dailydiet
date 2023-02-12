import styled from "styled-components/native";

type InDietStyleProps = {
  inDiet?: boolean;
};

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  min-height: 49px;
  max-height: 49px;

  margin-top: 8px;
  padding-left: 12px;
  padding-right: 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const TimeText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-right: 12px;
  border-style: solid;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400}
  border-right-width: 1px;
`;

export const MealText = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding-left: 12px;
`;

export const InDiet = styled.View<InDietStyleProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
