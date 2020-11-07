import styled from "styled-components"
import { Colors } from "../../theme"

export const Shield = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(58, 62, 70, 0.7);
`

export const ModalBody = styled.div`
  position: absolute;
  background: ${Colors.white};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  padding: 2em;
`
