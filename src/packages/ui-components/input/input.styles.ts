import styled from "styled-components"
import { device } from "../../breakpoints"
import { Colors } from "../../theme"

interface CssVariants {
  width?: number
  disabled: boolean
}

export const FieldWrapper = styled.div`
  margin-bottom: 1em;
  position: relative;
`

export const InputWrapper = styled.input<CssVariants>`
  width: ${({ width }) => `${width}%`};
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 0.125em solid ${Colors.timberwolf};
  font-size: 1em;
  font-weight: 400;
  line-height: 1.875em;
  ::placeholder {
    color: ${Colors.cloudy};
    line-height: 1.875em;
  }
  :hover {
    border-bottom: 0.125em solid
      ${({ disabled }) => (disabled ? Colors.timberwolf : Colors.coral)};
  }
`

export const Label = styled.label`
  color: ${Colors.black};
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 0.015em;
  margin-bottom: 0.5em;
  display: inline-block;
`

export const SearchButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: ${Colors.peach};
  }
  @media ${device.tablet} {
    display: none;
  }
`
