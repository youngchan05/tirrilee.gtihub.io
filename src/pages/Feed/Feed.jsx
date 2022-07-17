import React from 'react'
import styled, { css } from 'styled-components'
import Title from '../../components/UI/atoms/Title'
import ContentBox from '../../components/UI/molecules/ContentBox'
import FeedList from '../../components/UI/molecules/FeedList'

function Feed() {
  return (
    <Wrapper>
      <ContentBox>
        <Title text={'Tirrilee Feed'}/>
        <FeedList/>
      </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding:120px 0;
  .contentTit {
    margin-bottom:20px;
  }
  .feedWrapper {
    padding-top:0;
  }
  .tabs {
    justify-content: flex-start;
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${tablet} {
          padding:80px 0 120px 0;
        }
        @media screen and ${mobile} {
        }
    `
  }}
`
export default Feed