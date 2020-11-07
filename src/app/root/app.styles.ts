import styled, { createGlobalStyle, CSSObject } from "styled-components"
import { device } from "../../packages/breakpoints"
import { Colors } from "../../packages/theme"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-width: 18.75em;
    font-family: 'Kanit', sans-serif;
    input, textarea, select { font-family:inherit; }
    overflow-y: scroll;
`

export const PageHeader = styled.div`
  height: 5em;
  background: ${Colors.white};
`

export const PageDivider = styled.div`
  height: 0.125em;
  background: ${Colors.coral};
`

export const Logo = styled.img`
  margin: 0.9375em 0 0 6.5em;
  @media ${device.laptop} {
    margin-left: 1em;
  }
  @media ${device.mobileL} {
    margin: 1.6em 0 0 1em;
    max-width: 15.625em;
  }
`

export const Bakcground = styled.div`
  min-height: calc(100vh - 5.125em);
  background: url(assets/background.jpg) center no-repeat;
  background-size: cover;
  background-position: bottom 0 left 0;
`

export const CardsContainer = styled.div`
  display: flex;
  @media ${device.laptop} {
    flex-direction: column;
  }
`
export const resetButtonStyle: CSSObject = {
  position: "absolute",
  top: "24px",
  right: "24px",
  padding: "0.5em 1em",
}
