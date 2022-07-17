import React from 'react'
import styled, { css } from 'styled-components'
import ContentBox from '../../UI/molecules/ContentBox';
function ServiceTop({data}) {
  const {title,sub,icon, color,bgColor} = data;
  return (
    <Wrapper textColor={color} bgColor={bgColor}>
        <ContentBox>
            <p className='subTit'>{sub}</p>
            <strong className='tit'>{title}</strong>
            <i className='serviceIcon'>{icon}</i>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom:48px;
  .contentBox {
    position:relative;
    padding:46px 0;
    .serviceIcon {
      position:absolute;
      right:0;
      top:60px;
    }
    .subTit {
      margin-bottom:8px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: inherit;
    }
    .tit {
      display:inline-block;
      font-size: 48px;
      font-weight: bold;
      line-height: 1.5;
      color: inherit;
    }
  }
  ${proos => `
    width:100%;
    background-color:${proos.bgColor};
    color:${proos.textColor};
  `}
    ${({theme}) => {
      const { mobile,tablet} = theme;
      return css`
          @media screen and ${tablet} {
            .contentBox {
              position:relative;
              padding:20px 30px;
              .serviceIcon {
                right:30px;
                top:28px;
                svg {
                  width:160px;
                  height:100%;
                }
              }
              .subTit {
                margin-bottom:4px;
                font-size: 16px;
                line-height: 26px;
              }
              .tit {
                font-size: 32px;
                line-height: 48px;
              }
            }
          }
      `
  }}
`
export default ServiceTop