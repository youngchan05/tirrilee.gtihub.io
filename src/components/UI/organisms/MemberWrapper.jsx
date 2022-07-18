import React from 'react'
import styled, { css } from 'styled-components'

function MemberWrapper({children}) {
  return (
    <Wrapper>{children}</Wrapper>
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
            // margin:-12px 0 0 -12px;
          }
      `
    }}
`
export default MemberWrapper