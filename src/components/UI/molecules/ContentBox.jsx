import React from 'react'
import styled from 'styled-components'

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
`
export default ContentBox