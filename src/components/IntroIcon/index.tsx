import { ReactNode } from 'react'

import { IconContainer, IntroIconContainer } from './styles'

interface IntroIconProps {
  backgroundColor: string
  icon: ReactNode
  description: string
}

export function IntroIcon({
  backgroundColor,
  icon,
  description,
}: IntroIconProps) {
  return (
    <IntroIconContainer>
      <IconContainer backgroundColor={backgroundColor}>
        {icon}
      </IconContainer>

      <p>{description}</p>
    </IntroIconContainer>
  )
}
