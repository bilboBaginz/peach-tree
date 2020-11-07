import styled from "styled-components"
import { Colors } from "../../theme"
import { ButtonVariations } from "./button"

interface CssVariants {
  variation: ButtonVariations
}

export const ButtonWrapper = styled.button<CssVariants>`
  border: none;
  outline: none;
  cursor: pointer;

  ${({ variation }) =>
    variation === ButtonVariations.primary &&
    ` background: ${Colors.peach};
      color: ${Colors.white};
      border-radius: 0.25em;
      box-shadow: 0 0.25em ${Colors.peach};

      padding: 1em 5em;
      :hover {
          background: #f4a37a;
      }
      :active {
        box-shadow: none;
        transform: translateY(0.25em);
      }
  `};
  ${({ variation }) =>
    variation === ButtonVariations.outline &&
    ` background: ${Colors.white};
      color: ${Colors.black};
      border: 0.063em solid ${Colors.timberwolf};
      padding: 0.5em 1.3em;
      :hover {
        background: ${Colors.timberwolf};
    }
  `};
`
