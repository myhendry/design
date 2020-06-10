import React, { ReactNode } from "react"
import styled from "styled-components"

interface ContainerProps {
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <Contain>{children}</Contain>
}

const Contain = styled.div`
  padding: 0.75rem 3rem;
`
