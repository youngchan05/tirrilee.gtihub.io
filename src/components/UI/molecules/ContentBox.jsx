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
    padding:0 20px;
    box-sizing: content-box;
    margin:0 auto;
    ${({theme}) => {
      const { mobile,tablet, contents} = theme;
      return css`
          @media screen and ${contents} {
            box-sizing: border-box;
          }
          @media screen and ${tablet} {
            ${tabletStyle}
          }
          @media screen and ${mobile} {
            padding:0 20px;
          }
      `
    }}
`
const tabletStyle =  css`
    padding:0 30px;
    box-sizing: border-box;
`
export default ContentBox