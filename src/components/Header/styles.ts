import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 2rem 0.938rem;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 10px;

    #pin-container {
      background-color: ${(props) => props.theme['purple-300']};
      padding: 0.625rem;
      border-radius: 6px;
      color: ${(props) => props.theme['purple-700']};

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme['purple-700']};
      }
    }

    a {
      position: relative;
      background-color: ${(props) => props.theme['yellow-300']};
      padding: 0.625rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${(props) => props.theme['yellow-500']};
      }

      svg {
        color: ${(props) => props.theme['yellow-700']};
      }

      .notification {
        position: absolute;
        right: -0.5rem;
        top: -0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 1.25rem;
        padding: 0 0.375rem;
        background-color: ${(props) => props.theme['yellow-700']};
        border-radius: 1.25rem;

        span {
          font-size: 0.75rem;
          font-weight: 700;
          color: ${(props) => props.theme['white']};
        }
      }
    }
  }
`
