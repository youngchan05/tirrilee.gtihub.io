import React from 'react'
import styled from 'styled-components'
import Title from '../../components/UI/atoms/Title'
import ContentBox from '../../components/UI/molecules/ContentBox'
import Map from '../../components/UI/molecules/Map'

function Contact() {
  return (
    <Wrapper>
      <ContentBox>
        <Title text={'Contact'}/>
        <Map/>
      </ContentBox>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    padding:120px 0;
    .contentTit {
        margin-bottom:32px;
    }
`
export default Contact