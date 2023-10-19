import styled from 'styled-components';

export const CheckoutProductsContainer = styled.div`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.938rem;
  }

  .products-card {
    background-color: ${(props) => props.theme['gray-100']};
    padding: 2.5rem;
    border-radius: 6px 44px;

    .price-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & +.price-info {
        margin-top: 0.75rem;
      }

      p {
        font-size: 0.875rem;
      }

      span {
        font-size: 1rem;
      }

      &-total {
        p, span {
          font-size: 1.25rem;
          font-weight: bold;
        }
      }
    }

    button[type="submit"] {
      margin-top: 1.5rem;
      color: ${(props) => props.theme['white']};
      background-color: ${(props) => props.theme['yellow-500']};
      border-radius: 6px;
      padding: 0.75rem 0.5rem;
      width: 100%;

      display: flex;
      justify-content: center;

      transition: .3s ease all;

      &:hover:enabled {
        background-color: ${(props) => props.theme['yellow-700']};
      }

      &:disabled {
        opacity: .6;
        cursor: no-drop;
      }
    }
  }
`
