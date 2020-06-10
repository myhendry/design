import React from "react"
import styled from "styled-components"

interface LogoProps {
  a?: boolean
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <Circle>
        <StyledText>H</StyledText>
      </Circle>
    </div>
  )
}

const StyledText = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`

const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px lightgrey;
`
