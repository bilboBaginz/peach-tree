import React from "react"
import { CSSObject } from "styled-components"
import { Down, Up } from "./arrows.styles"

export enum ArrowDirection {
  up = "arrow-up",
  down = "arrow-down",
}

interface ArrowsProps {
  direction: ArrowDirection | null
  style?: CSSObject
}

export const Arrows: React.FC<ArrowsProps> = ({ direction, style }) => {
  const arrowsInventory = [
    {
      icon: <Down style={style} />,
      direction: ArrowDirection.down,
    },
    {
      icon: <Up style={style} />,
      direction: ArrowDirection.up,
    },
  ]

  const arrow = arrowsInventory.find(
    (arrowElement) => arrowElement.direction === direction
  )

  return arrow?.icon || null
}
