import { NavigationButton } from "components/NavigationButton";
import theme from "theme/index";
import { Container, Title, SubTitle, CardValue } from "./styles";

export type CardType = "HEADERCARD" | "HEADER" | "INFOCARD" | "FORMHEADER";

type Props = {
  type?: CardType;
  value?: CardValue;
  title: string;
  subtitle?: string;
};

export const CardColor = {
  GOOD: theme.COLORS.GREEN_LIGHT,
  BAD: theme.COLORS.RED_LIGHT,
  NORMAL: theme.COLORS.GRAY_600,
};

export function InfoCard({
  type = "INFOCARD",
  value = "NORMAL",
  title,
  subtitle,
}: Props) {
  const HEADER = type === "HEADER";
  const HEADERCARD = type === "HEADERCARD";
  const FORMHEADER = type === "FORMHEADER";

  return (
    <Container type={type} bgColor={CardColor[value]}>
      {HEADERCARD && <NavigationButton type={value} />}
      {HEADER && <NavigationButton type={value} isOpen />}
      {FORMHEADER && <NavigationButton type={value} isOpen />}

      <Title type={type}>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
