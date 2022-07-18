import React from 'react'
import styled, { css } from 'styled-components'
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
    ${({theme}) => {
      const { mobile,tablet} = theme;
      return css`
          @media screen and ${tablet} {
            padding:80px 0 120px 0;
            .contentTit {
              margin-bottom:20px;
            }
          }
          @media screen and ${mobile} {
            padding:60px 0 80px 0;
          }
      `
    }}
`
export default Contact