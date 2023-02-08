import styled from "styled-components/native";
import { ForkKnife } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const LogoIcon = styled(ForkKnife).attrs(({ theme }) => ({
  size: 37,
  color: theme.COLORS.GRAY_100,
}))``;

export const AccountPicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
