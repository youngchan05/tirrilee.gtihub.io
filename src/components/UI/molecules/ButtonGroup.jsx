import React from 'react'
import styled from 'styled-components'

function ButtonGroup({children ,className}) {
  return (
    <Wrapper className={className}>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    .btn {
         +.btn {
            margin-left:20px;
         }
    }
`
export default ButtonGroup