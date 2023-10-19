import styled from 'styled-components';

export const CheckoutCoffeeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  .coffee-info {
    display: flex;
    gap: 1.25rem;

    p {
      margin-bottom: 0.5rem;
    }
  }
`
