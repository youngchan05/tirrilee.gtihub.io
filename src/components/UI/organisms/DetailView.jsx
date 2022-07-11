import React from 'react'
import styled from 'styled-components'

function DetailView({children}) {
  return (
    <Wrapper className='detailView'>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding-bottom:48px;
    border-bottom:1px solid var(--gray-scale-gray-3);
    .contentTit {
        margin-bottom:40px;
    }
    dl {
        display:flex;
        dt{
            width:78px;
            margin-right:20px;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: left;
            color: var(--gray-scale-gray-8);
        }
        dd{
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.7;
            letter-spacing: normal;
            text-align: left;
            color: var(--gray-scale-gray-8);
        }
        + dl {
            margin-top:20px;
        }
    }
`
export default DetailView