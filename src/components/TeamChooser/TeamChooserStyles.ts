import styled from 'styled-components'

const StyledChooser = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;

  .pick-label {
    font-size: 3rem;
    font-weight: 500;
  }
`
const ChooserBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 80px;

  .team-card {
    align-items: center;
    background: #222b51;
    border: 2px solid #d5d9e8;
    color: #fff;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 5px #8ec456);
      .team-logo {
        animation: spin 7s linear infinite;
      }
    }

    .content-box {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      padding: 50px 20px;

      .team-logo {
        width: 100px;
        height: 100px;
        margin-top: 30px;
        margin-bottom: 30px;
        background-image: url('/assets/link.png');
        background-size: 90% 90%;
        background-position: center center;
        background-repeat: no-repeat;

        &.marvel {
          background-image: url('/assets/shield.png');
        }
      }

      .team-name {
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
        font-weight: 600;
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export { StyledChooser, ChooserBar }
