import styled from "styled-components"
import { device } from "../../../packages/breakpoints"
import { Colors } from "../../../packages/theme"

export const ListWrapper = styled.div`
  position: absolute;
  top: 5.25em;
  bottom: 0;
  overflow-y: scroll;
  width: 98.4%;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  @media ${device.laptop} {
    width: 96.4%;
  }
  @media ${device.tablet} {
    width: 94.4%;
  }
  @media ${device.mobileL} {
    width: 92.4%;
  }
`

export const ListHeader = styled.div`
  display: flex;
  position: sticky;
  z-index: 1;
  background: ${Colors.white};
  top: 0;
  margin: 0 0 1em 0;
  @media ${device.laptop} {
    flex-direction: column;
  }
`

export const SearchInputWrapper = styled.div`
  flex: 1;
`
export const Span = styled.span`
  margin: 0.5em 1em 0 1em;
  font-size: 0.875em;
  font-weight: 600;
`
export const customInputBorder = {
  borderBottom: `0.094em solid ${Colors.timberwolf}`,
}

export const SortingButtonsWrapper = styled.div`
  display: flex;
  height: 2.2em;
  margin: 0 1em 1em 0;
`
export const noLeftBorder = {
  borderLeft: 0,
}

export const FlexedText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1em;
  margin-top: 0.35em;
`
