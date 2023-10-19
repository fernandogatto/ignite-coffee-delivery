import styled from 'styled-components';

interface IconContainerProps {
  backgroundColor: string
}

export const SubmittedContainer = styled.div`
  padding: 0 0.938rem;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h2 {
    color: ${(props) => props.theme['yellow-700']};
  }

  .submitted-info {
    padding: 2.5rem;
    margin-top: 3.25rem;
    border-radius: 6px 44px;
    border: 1px solid ${(props) => props.theme['purple-500']};

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const SubmittedIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};

  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme['background']};
  }
`

export const CheckoutContainer = styled.div`
  padding: 0 0.938rem 2rem;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
