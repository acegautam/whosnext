import Button from '@mui/material/Button';
import styled from 'styled-components';
import { styled as styledMui } from '@mui/material/styles';

// const icon = 'robot';
// const icon = 'ghost';
// const icon = 'pumpkin';
const icon = 'vampire';
// const icon = 'witch';
// const icon = 'zombie';
// const icon = 'dracula';
// const icon = 'jack-o-lantern';

const StyledBoard = styled.div`
  width: 70vw;
  height: 60vh;
  font-family: 'Amatic SC';
  color: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  .size-n {
    position: unset;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: space-around;
    gap: 50px;
    .badge {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      position: unset;
      &.size-5p {
        transform: scale(1);
      }
      &.size-10p {
        transform: scale(0.95);
      }
      &.size-15p {
        transform: scale(0.85);
      }
      &.size-25p {
        transform: scale(0.65);
      }
    }

    .label {
      display: flex;
      position: unset;
      justify-content: center;
      margin-top: 5px;
    }
  }
  .size-5 {
    .name-0 {
      top: 0;
      left: 45%;
    }
    .name-1 {
      top: 30%;
      left: 0;
    }
    .name-2 {
      top: 30%;
      left: 95%;
    }
    .name-3 {
      bottom: 0%;
      left: 15%;
    }
    .name-4 {
      bottom: 0%;
      left: 70%;
    }
  }
  .size-4 {
    .name-0 {
      top: 10%;
      left: 10%;
    }
    .name-1 {
      top: 10%;
      right: 10%;
    }
    .name-2 {
      bottom: 10%;
      left: 10%;
    }
    .name-3 {
      bottom: 10%;
      right: 10%;
    }
  }
  .size-3 {
    .name-0 {
      top: 0;
      left: 45%;
    }
    .name-1 {
      bottom: 0%;
      left: 15%;
    }
    .name-2 {
      bottom: 0%;
      left: 70%;
    }
  }
  .size-2 {
    .name-0 {
      top: 40%;
      left: 0;
    }
    .name-1 {
      top: 40%;
      right: 0;
    }
  }
  .size-1 {
    .name-0 {
      top: 30%;
      left: 45%;
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    40% {
      transform: scale(1.2);
      opacity: 1;
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes dance {
    0% {
      rotate: 0deg;
    }
    50% {
      rotate: 2deg;
    }
    100% {
      rotate: 0deg;
    }
  }

  @keyframes showUp {
    100% {
      opacity: 1;
    }
  }
`;

const BadgeList = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const NameBadge = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;

  .avatar {
    animation: dance 500ms ease-in infinite;
  }

  &.selected {
    scale: 1.2;
    transition: scale 100ms;
    filter: drop-shadow(0 0 15px #8ec456);
  }
  &.chosen {
    animation: bounceIn 2s ease-in forwards;
    .avatar {
      background-image: url('/assets/${icon}_c.png');
      animation-play-state: paused;
    }
  }
`;

const NameAvatar = styled.div`
  background-image: url('/assets/${icon}.png');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const NameLabel = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`;

const SpinButton = styled.div`
  display: flex;
  background-image: url('/assets/spin.png');
  background-size: 40% 40%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  cursor: pointer;

  animation: pulse 1s ease-in infinite;
  &:hover {
    animation-play-state: paused;
    .spider {
      top: -120%;
    }
  }
`;
const AcceptButton = styled.div`
  background-image: url('/assets/accept.png');
  background-size: 60% 60%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  position: relative;
  top: -20%;
  left: 40%;
  cursor: pointer;
  opacity: 0;
  animation: showUp 1s ease-in 1s forwards;
`;

const ColorButton = styledMui(Button)({
  width: 150,
  height: 60,
  fontSize: 25,
  fontWeight: 900,
  lineHeight: 1.5,
  borderRadius: 10,
  backgroundColor: '#ff5364',
  color: '#fff',
  fontFamily: 'Amatic SC',
  opacity: 0,
  animation: 'showUp 0.5s ease-in 0.5s forwards',
  '&:hover': {
    backgroundColor: '#7f2d40',
  },
});

export {
  StyledBoard,
  BadgeList,
  NameBadge,
  NameAvatar,
  NameLabel,
  SpinButton,
  AcceptButton,
  ColorButton,
};
