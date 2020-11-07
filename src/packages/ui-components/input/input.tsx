import React, { InputHTMLAttributes, KeyboardEvent } from "react"
import { Colors } from "../../theme"
import { InputWrapper, Label, FieldWrapper, SearchButton } from "./input.styles"

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  label?: string
  isNumber?: boolean
  empty?: boolean
  invalidNumber?: boolean
  customError?: string
  searchButton?: boolean
  handleOnClickClear?: () => void
}

export const Input: React.FC<CustomInputProps> = ({
  width = 100,
  label = "",
  placeholder = "",
  disabled = false,
  isNumber = false,
  style = {},
  onChange,
  empty = false,
  invalidNumber = false,
  value,
  customError = "",
  type = "",
  searchButton = false,
  handleOnClickClear,
}) => {
  /* type = number for input has cross browser issues, opting for solution with javasctipt */
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isNumber === false) {
      // input is not restricted to digits, exit function
      return
    }

    const keyIsNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(e.key))
    const isAllowedKey = ["Backspace", "ArrowRight", "ArrowLeft", "."].includes(
      e.key
    )

    if (!(keyIsNumber || isAllowedKey)) {
      e.preventDefault()
    }
  }

  return (
    <FieldWrapper>
      {label && (
        <Label>
          {label}
          <span style={{ color: Colors.danger, fontWeight: 300 }}>
            {empty === true && " Required*"}
            {invalidNumber === true && " Invalid"}
            {customError && customError}
          </span>
        </Label>
      )}
      <InputWrapper
        aria-label={label}
        aria-required="true"
        disabled={disabled}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={style}
        value={value}
        width={width}
        type={type}
      />
      {searchButton && (
        <SearchButton onClick={handleOnClickClear}>{"X"}</SearchButton>
      )}
    </FieldWrapper>
  )
}
