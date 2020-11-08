import styled from "styled-components"
import { device } from "../../../../../packages/breakpoints"
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
  width: 15%;
  min-width: 3.75em;
`

export const IconCell = styled.div`
  width: 15%;
  @media ${device.laptop} {
    display: none;
  }
`
export const AmountCell = styled.div`
  margin-left: auto;
  order: 2;
`

export const InfoCell = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
`

export const ThinSpan = styled.span`
  font-weight: 300;
  font-size: 14px;
`
