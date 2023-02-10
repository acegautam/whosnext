import Button from '@mui/material/Button';
import styled from 'styled-components';
import { styled as styledMui } from '@mui/material/styles';

const StyledSplash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  flex-flow: column nowrap;
  padding: 30px;

  .help-text {
    font-family: 'Roboto';
    font-size: 1.1rem;
    opacity: 0.7;
    line-height: 1.5rem;

    .smiley {
      font-size: 1.5rem;
    }
  }

  .btn-start {
    background: #445392 !important;
    padding: 10px 40px !important;
    font-family: 'Amatic SC' !important;
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    margin-top: 30px;
    margin-bottom: 80px;
    border-radius: 10px !important;
  }
`;

const AppLogo = styled.div`
  background-image: url('/assets/applogo.png');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin: 100px 0 50px 0;
`;

const StyledButton = styledMui(Button)({
  width: 150,
  fontSize: 25,
  fontWeight: 900,
  lineHeight: 1.5,
  borderRadius: 10,
  backgroundColor: '#7f2d40',
  color: '#fff',
  fontFamily: 'Amatic SC',
  opacity: 0,
  '&:hover': {
    backgroundColor: '#7f2d40',
  },
});

export { StyledSplash, AppLogo, StyledButton };
