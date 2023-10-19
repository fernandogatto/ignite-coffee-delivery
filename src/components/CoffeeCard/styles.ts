import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 0rem 1.5rem 1.25rem;

  &:hover {
    img {
      transition: 1s ease all;
      transform: rotate(360deg);
    }
  }

  img {
    position: absolute;
    top: -1.25rem;
  }

  .info-container {
    padding-top: 5.625rem;
    text-align: center;

    .tags-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      margin-bottom: 1rem;

      .tag-item {
        background-color: ${(props) => props.theme['yellow-300']};
        padding: 4px 8px;
        border-radius: 27px;

        span {
          font-size: 0.625rem;
          line-height: 0.813rem;
          text-transform: uppercase;
          color: ${(props) => props.theme['yellow-700']};
          font-weight: 700;
        }
      }
    }
  }

  .name {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 2.063rem;
  }

  .buy-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 1rem;
    }
  }
`
