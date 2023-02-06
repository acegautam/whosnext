import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 10px;
  width: 100%;

  a.icons-credit {
    font-size: 0.6rem;
    opacity: 0.3;
    color: #fff;
    position: absolute;
    right: 10px;
    bottom: 0;
  }

  small {
    font-family: 'Amatic SC';
    font-size: 20px;
    letter-spacing: 0.1rem;
    width: 300px;
    color: #fff;
    opacity: 0.7;
    margin: 0px auto;

    .heart {
      display: inline-block;
      color: #e25555;
      animation: pound 700ms linear infinite;
    }
    a {
      color: #fff;
      text-decoration: none;
      .dude {
        border-bottom: 1px dashed #fff;
      }
    }
  }

`

export { StyledFooter };