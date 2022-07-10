import React from 'react'
import styled from 'styled-components'

function SectionText({children, TextColor}) {
  return (
    <Wrapper TextColor={TextColor} className="sectionTitle">
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  .sub {
    display:inline-block;
    font-size: 20px;
    line-height:34px;
    color:${props => props.TextColor ? props.TextColor : 'var(--gray-scale-gray-8)'};
  }
  .title{
    display:inline-block;
    width:100%;
    margin-bottom:16px;
    font-size: 48px;
    font-weight: 800;
    line-height:72px;
    text-align: center;
    color:${props => props.TextColor ? props.TextColor : 'var(--gray-scale-black)'};
  }
  .desc {
    font-size: 20px;
    line-height:34px;
    color:${props => props.TextColor ? props.TextColor : 'var(--gray-scale-black)'};
  }
`
export default SectionText