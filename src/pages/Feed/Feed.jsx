import React from 'react'
import styled from 'styled-components'
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
  .feedTabs {
    margin-bottom:32px;
    justify-content: flex-start;
  }
`
export default Feed