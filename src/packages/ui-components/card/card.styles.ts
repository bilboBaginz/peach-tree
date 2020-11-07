import styled from "styled-components"
import { device } from "../../breakpoints"
import { Colors } from "../../theme"

interface CssVariants {
  height: number | null
  width?: number
  margin?: string
  padding?: string
}

export const CardWrapper = styled.div<CssVariants>`
  height: ${({ height }) => `${height}em`};
  width: ${({ width }) => `${width}%`};
  margin: ${({ margin }) => margin};
  background: ${Colors.white};
  position: relative;
  min-width: 21em;
  @media ${device.laptop} {
    margin-left: 1em;
    margin: 1.5em auto;
    width: 80%;
  }
`

export const CardHeader = styled.div<CssVariants>`
  height: ${({ height }) => `${height}em`};
  background: ${Colors.eastern_blue};
  color: ${Colors.white};
  line-height: ${({ height }) => `${height}em`};
  font-size: ${({ height }) => (height ? `${height / 2.4}em` : "")};
  text-align: center;
  font-weight: 300;
  position: relative;
`

export const CardBody = styled.div<Partial<CssVariants>>`
  padding: ${({ padding }) => padding};
`

export const Icon = styled.img`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
`
