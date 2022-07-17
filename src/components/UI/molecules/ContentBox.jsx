import React from 'react'
import styled, { css } from 'styled-components'

function ContentBox({children}) {
  return (
    <Wrapper className='contentBox'>
        {children}
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    max-width:1156px;
    margin:0 auto;
    ${({theme}) => {
      const { mobile,tablet} = theme;
      return css`
          @media screen and ${tablet} {
            ${tabletStyle}
          }
      `
    }}
`
const tabletStyle =  css`
    padding:0 30px;
`
export default ContentBox