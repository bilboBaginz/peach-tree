import React, { ReactNode } from "react"
import { CardBody, CardHeader, CardWrapper, Icon } from "./card.styles"

interface CardProps {
  children: ReactNode
  cardHeight?: number
  cardWidth: number
  cardMargin?: string
  cardHeaderHeight: number
  cardTitle: string
  iconSrc: string
  cardBodyPadding?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  cardHeight = null,
  cardWidth,
  cardMargin,
  cardHeaderHeight,
  cardTitle,
  iconSrc,
  cardBodyPadding = "2em 1em",
}) => {
  return (
    <CardWrapper height={cardHeight} width={cardWidth} margin={cardMargin}>
      <CardHeader height={cardHeaderHeight}>
        <Icon src={iconSrc} />
        {cardTitle}
      </CardHeader>
      <CardBody padding={cardBodyPadding}>{children}</CardBody>
    </CardWrapper>
  )
}
