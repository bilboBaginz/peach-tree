import styled from "styled-components"
import { Colors } from "../../../../../packages/theme"

const borderWidth = 0.125
const rowHeight = 4.25
const labelWidth = 0.625
const border = `${borderWidth}em solid ${Colors.timberwolf}`

interface CssVariants {
  last?: boolean
  categoryCode?: string
  flexBasis?: number
}

export const RowWrapper = styled.li<CssVariants>`
  position: relative;
  height: ${rowHeight}em;
  border-top: ${border};
  border-right: ${border};
  ${({ last }) =>
    last &&
    `border-bottom: ${border};
  `}
`

export const CategoryLabel = styled.div<CssVariants>`
  position: absolute;
  background: ${({ categoryCode }) => categoryCode};
  top: -${borderWidth}em;
  left: 0;
  width: ${labelWidth}em;
  height: calc(${rowHeight}em + ${borderWidth}em);
`

export const CellsWrapper = styled.div`
  padding: 0.75em 1.5em;
  line-height: calc(${rowHeight}em - 1.5em);
`

export const CellsFlex = styled.div`
  display: flex;
`

export const DateWrapper = styled.div`
  font-weight: 300;
  color: ${Colors.dimGray};
  white-space: nowrap;
`

export const Icon = styled.img`
  height: calc(${rowHeight}em - 1.5em);
  filter: grayscale(100%);
`

export const DateCell = styled.div`
  flex-basis: 15%;
`

export const IconCell = styled.div`
  flex-basis: 12%;
`

export const InfoCell = styled.div`
  flex-basis: 70%;
`

export const ThinSpan = styled.span`
  font-weight: 300;
  font-size: 14px;
`
