import React from 'react'
import styled, { css } from 'styled-components'

function WorkWrapper({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:-16px 0 0 -16px;
    ${({theme}) => {
      const { mobile,tablet} = theme;
      return css`
          @media screen and ${mobile} {
            margin:0
          }
      `
    }}
`

export default WorkWrapper