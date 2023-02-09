import styled from 'styled-components';

const StyledHeader = styled.div`
  font-family: 'Amatic SC';
  color: #fff;
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.5em;
  letter-spacing: 5.2px;
  text-shadow: 5px 3px 0px rgb(0 0 0 / 26%);
  position: relative;
  top: 10px;
  padding-bottom: 30px;

  .title {
    text-align: center;
  }

  .icon-button {
    color: #fff;
    position: fixed;
    top: 20px;
    right: 20px;
    .menu-button {
      font-size: 2rem;
    }
  }
`;

const TeamLogoBox = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 20px;
  left: 20px;

  .logo {
    background-image: url('/assets/link.png');
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin-right: 10px;

    &.marvel {
      background-image: url('/assets/shield.png');
    }
  }
  .name {
    font-size: 1.7rem;
    line-height: 1.5rem;
  }
`;

export { StyledHeader, TeamLogoBox };
