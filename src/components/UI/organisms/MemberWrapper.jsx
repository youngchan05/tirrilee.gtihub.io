import React from 'react'
import styled from 'styled-components'

function MemberWrapper({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:-20px 0 0 -20px;
`
export default MemberWrapper