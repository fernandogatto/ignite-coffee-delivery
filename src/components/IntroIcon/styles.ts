import styled from 'styled-components'

interface IconContainerProps {
  backgroundColor: string
}

export const IntroIconContainer = styled.div`
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
