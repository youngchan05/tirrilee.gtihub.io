import React from 'react'
import styled, { css } from 'styled-components'

function HomeBanner({img, bgColor}) {
  return (
    <Wrapper bgColor={bgColor}>
        <Banner>
            <img src={`/images/${img}.png`} alt="" />
        </Banner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color:${props => props.bgColor ? props.bgColor : '#fff'};
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding: 0 30px;
            }
            @media screen and ${mobile} {
                padding: 0 20px;
            }
        `
    }}
    
`

const Banner = styled.div`
    width:100%;
    max-width:1156px;
    margin:0 auto;
    img {
        width:100%;
    }
`
export default HomeBanner