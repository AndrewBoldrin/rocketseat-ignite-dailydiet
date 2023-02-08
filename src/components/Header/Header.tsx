import { AccountPicture, Container, LogoIcon } from "./styles";
import account_picture from "assets/account_picture.png";

export function Header() {
  return (
    <Container>
      <LogoIcon />
      <AccountPicture source={account_picture} />
    </Container>
  );
}
