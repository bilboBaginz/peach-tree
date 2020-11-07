import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { CSSObject } from "styled-components"
import { ButtonWrapper } from "./button.styles"

export enum ButtonVariations {
  primary = "primary",
  outline = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation: ButtonVariations
  children: ReactNode | string
  style?: CSSObject
}
export const Button: React.FC<ButtonProps> = ({
  variation,
  children,
  style,
  onClick,
}) => {
  return (
    <ButtonWrapper style={style} variation={variation} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}
