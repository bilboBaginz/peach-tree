import React, { ReactNode } from "react"
import { ModalBody, Shield } from "./modal.styles"

interface ModalProps {
  children: ReactNode
  display: boolean
}

export const Modal: React.FC<ModalProps> = ({ children, display }) => (
  <>
    {display && (
      <Shield>
        <ModalBody>{children}</ModalBody>
      </Shield>
    )}
  </>
)
