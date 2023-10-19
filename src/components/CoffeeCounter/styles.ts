import styled from 'styled-components'

export const CoffeeCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CounterContainer = styled.div`
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 8px;
  height: 2.25rem;

  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background-color: transparent;
    color: ${(props) => props.theme['purple-500']};

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }

    &:disabled {
      opacity: .6;
      cursor: no-drop;
    }
  }
`

export const RemoveCartButton = styled.button`
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 8px;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const AddCartButton = styled.button`
  background-color: ${(props) => props.theme['purple-700']};
  border-radius: 6px;
  padding: 8px;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`
