import React from 'react'
import styled, { css } from 'styled-components'
import { IconArrowRgiht, IconPlan, IconSlash, IconUsers } from '../../../common/svg'
import ContentBox from './ContentBox';
import { Link } from 'react-router-dom';

function HomeCards() {
  const items = [
    {
      icon:<IconUsers/>,
      title:'IT Consulting',
      url:'/service/consulting',
      sub:'함께 아이디어를 구체화하는 과정입니다.',
    },
    {
      icon:<IconPlan/>,
      title:'Plan & Design',
      url:'/service',
      sub:'구체화된 아이디어를 설계하는 과정입니다.',
    },
    {
      icon:<IconSlash/>,
      title:'Development',
      url:'/service/development',
      sub:'설계된 프로젝트를 개발하는 과정입니다.',
    },
  ]
  return (
    <ContentBox>
      <Wrapper>
        {
          items.map((i, idx) => {
            const {icon , url, title, sub} = i;
            return (
              <li key={idx}>
                <div className="topSpot">
                  <i>{icon}</i>
                  <Link className='link' to={url}><IconArrowRgiht/></Link>
                </div>
                <strong className='tit'>{title}</strong>
                <p className='sub'>{sub}</p>
              </li>
            )
          })
        }
      </Wrapper>
    </ContentBox>
  )
}

const Wrapper = styled.ul`
  display:flex;
  margin-top:-36px;
  li {
    width:33.33%;
    padding: 28px;
    border-radius: 8px;
    border: solid 1px var(--gray-scale-gray-3);
    background-color: var(--gray-scale-white);
    transition: all ease-in .2s;
    + li {
      margin-left:20px;
    }
    .topSpot {
      display:flex;
      margin-bottom:7px;
      .link {
        margin-left:auto;
      }
    }
    .tit {
      display:inline-block;
      font-size: 24px;
      font-weight: bold;
      line-height: 40px;
      color: var(--gray-scale-black);
    }
    .sub {
      margin-top:4px;
      font-size: 16px;
      line-height: 28px;
      color: var(--gray-scale-black);
    }
    &:hover {
        border: solid 1px var(--primary-p-500);
        
    }
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${tablet} {
          display:block;
          margin-top:-28px;
          li {
            width:100%;
            padding:26px;
            .topSpot {
              margin-bottom:12px;
            }
            + li {
              margin-top:20px;
              margin-left:0;
            }
          }
        }
        @media screen and ${mobile} {
          margin-top:-20px;
          li {
            + li {
              margin-top:12px;
            }
          }
        }
    `
}}
`
export default HomeCards