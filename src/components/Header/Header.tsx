import { StyledHeader, TeamLogoBox } from "./HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <div className="title">Who's Next???</div>
      <TeamLogoBox>
        <div className="logo" />
        <div className="name">Team Marvel</div>
      </TeamLogoBox>
    </StyledHeader>
  )
}

export default Header;