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
    margin:-16px 0 0 -16px;
`
export default MemberWrapper