import styled from 'styled-components';

const CreepySpider = styled.div`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 15%;

  /* 4. Animatie */
  animation: swing 2s infinite;
  transform-origin: top;

  /* Bonus */
  transition: 1s ease-in-out;

  .spiderweb {
    width: 2px;
    height: 200px;
    margin-left: 49px;
    background: rgba(255, 255, 255, 0.7);
  }

  .body {
    width: 100px;
    height: 80px;
    background: #000;
    position: relative;
    border-radius: 50%;
  }

  .body .eye {
    width: 33px;
    height: 33px;
    position: absolute;
    bottom: 20px;
    background: #fff;
    border-radius: 50%;
  }

  .body .eye.left {
    left: 15px;
  }

  .body .eye.right {
    right: 15px;
  }

  .body .eye:after {
    background: #000;
    width: 7px;
    height: 7px;
    content: '';
    display: block;
    margin: 55%;
    border-radius: 50%;

    /* 3. Animatie */
    animation: look 8s infinite;
  }

  .legs .leg {
    width: 80px;
    height: 40px;
    margin-top: -20px;
    border: 5px solid transparent;
    border-top-color: #000;
    border-radius: 40px 40px 0 0;
  }

  .legs {
    position: absolute;
    bottom: -10%;
    z-index: -1;
  }

  .legs.left {
    left: -70%;
  }
  .legs.right {
    right: -60%;
  }

  .legs.left .leg:nth-child(1) {
    transform: rotate(10deg);
    margin-left: 10px;
  }
  .legs.right .leg:nth-child(1) {
    transform: rotate(-10deg);
    margin-left: -10px;
  }

  .legs.left .leg:nth-child(2) {
    transform: rotate(-20deg);
    margin-left: 20px;
  }
  .legs.right .leg:nth-child(2) {
    transform: rotate(20deg);
    margin-left: -20px;
  }

  .legs.left .leg:nth-child(3) {
    transform: rotate(-50deg);
    margin-left: 30px;
  }
  .legs.right .leg:nth-child(3) {
    transform: rotate(50deg);
    margin-left: -30px;
  }

  /* 1. Animatie */
  @keyframes look {
    0%,
    40%,
    100% {
      transform: translateX(0);
    }

    45%,
    95% {
      transform: translateX(-110%);
    }
  }

  /* 3. Animatie */
  @keyframes swing {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }
`;

export { CreepySpider };
