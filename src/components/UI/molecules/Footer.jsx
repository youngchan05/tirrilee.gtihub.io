import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { IconBehance, IconInstagram, IconNotion, IconTistory, IconYoutube } from '../../../common/svg'

function Footer() {
  const links = [
    {name:'youtube' , link:'https://www.youtube.com/c/%EB%AF%BC%EC%8D%B8MinSsum%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%84%B0'},
    {name:'Instagram' , link:'https://www.instagram.com/tirrilee/'},
    {name:'Notion' , link:'https://www.notion.so/tirrilee/IT-3463581c0a2e4ea49409459be408fc03'},
    {name:'Tistory' , link:'https://tirrilee.tistory.com/'},
    {name:'Behance' , link:'https://www.behance.net/tirrilee00010c'},
  ]

  const IconBox = ({name}) => {
    switch(name){
      case 'youtube' : return <IconYoutube/>;
      case 'Instagram' : return <IconInstagram/>;
      case 'Notion' : return <IconNotion/>;
      case 'Tistory' : return <IconTistory/>;
      case 'Behance' : return <IconBehance/>;
      default : return ''
    }
  }
  return (
    <Wrapper>
      <Inner>
        <div className="linkBox">
          {
            links.map( (i, idx) => 
              <a key={idx} href={i.link} target='_blank'>
                {IconBox(i)}
              </a>
            )
          }
        </div>
        <div className="company">
          <dl>
            <dt>(주)</dt>
            <dd>티릴리</dd>
            <dt>대표</dt>
            <dd>이민재</dd>
          </dl>
          <dl>
            <dt>사업자 번호</dt>
            <dd>155-88-01025</dd>
            <dt>Contact</dt>
            <dd>tirrilee00@gmail.com</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>서울 마포구 동교로 156-12 코이멕스빌딩 2층 티릴리</dd>
          </dl>
        </div>
      </Inner>
    </Wrapper>
  )
}
const Inner = styled.div`
  width:100%;
  max-width:1156px;
  margin:0 auto;
  .linkBox {
    display:flex;
    margin-bottom:36px;
    a {
      display:flex;
      align-items: center;
      justify-content: center;
      width:44px;
      height:44px;
      border-radius: 16px;
      background-color: var(--primary-primary);
      + a {
        margin-left:24px;
      }
    }
  }
  .company {
    dl {
      display:flex;
      dt {
        font-size: 14px;
        font-weight: 800;
        color: var(--gray-scale-gray-6);
        + dd {
          margin-left: 3px;
        }
      }
      dd {
        font-size: 14px;
        color: var(--gray-scale-gray-6);
        + dt {
          padding-left:12px;
          margin-left:12px;
          border-left:1px solid var(--gray-scale-gray-6);
        }
      }
      + dl {
        margin-top:14px;
      }
    }
  }
`
const Wrapper = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  padding:40px 0;
  border-top:1px solid var(--gray-scale-gray-3);
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${tablet} {
          padding:40px 30px;
        }
    `
}}
`
export default Footer