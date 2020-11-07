import React from "react"
import { CSSObject } from "styled-components"
import {
  ArrowDirection,
  Arrows,
} from "../../../../../packages/ui-components/arrows/arrows"
import {
  Button,
  ButtonVariations,
} from "../../../../../packages/ui-components/button"
import { Criteria } from "../../../../root/globalState/context"
import {
  ArrowDownStyle,
  ArrowUpStyle,
  SortingButtonFlex,
} from "./sorting-button.styles"

interface SortingButtonProps {
  criteria: Criteria
  direction?: ArrowDirection | null
  style?: CSSObject
  onSortingClick: (criteria: Criteria) => void
}

export const SortingButton: React.FC<SortingButtonProps> = ({
  criteria,
  direction = null,
  style,
  onSortingClick,
}) => {
  const handleSortingButtonClick = () => {
    onSortingClick(criteria)
  }
  return (
    <Button
      variation={ButtonVariations.outline}
      onClick={handleSortingButtonClick}
      style={style}
    >
      <SortingButtonFlex>
        {criteria}
        <Arrows
          style={direction === ArrowDirection.up ? ArrowUpStyle : ArrowDownStyle}
          direction={direction || null}
        />
      </SortingButtonFlex>
    </Button>
  )
}
