import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { CardValue } from "components/InfoCard/styles";

export type Props = {
  isOpen?: boolean;
  color?: CardValue;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 24px;
  height: 24px;
  ${({ isOpen }) => (isOpen ? "margin-right: auto" : "margin-left: auto")}
`;

export const Go = styled(ArrowUpRight).attrs<Props>(({ theme, color }) => ({
  size: 24,
  color: color === "GOOD" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const GoBack = styled(ArrowLeft).attrs<Props>(({ theme, color }) => ({
  size: 24,
  color: color === "GOOD" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
