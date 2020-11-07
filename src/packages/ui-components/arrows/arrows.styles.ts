import styled from "styled-components"
import { Colors } from "../../theme"

export const Down = styled.div`
  border-style: solid;
  border-width: 7.5px 5px 0 5px;
  border-color: ${Colors.cloudy} transparent transparent transparent;
`
export const Up = styled.div`
  border-style: solid;
  border-width: 0 5px 7.5px 5px;
  border-color: transparent transparent ${Colors.cloudy} transparent;
`
