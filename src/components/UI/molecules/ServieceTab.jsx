import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { IconServieTab01, IconServieTab02, IconServieTab03, IconServieTab04 } from '../../../common/svg'
import useClick from '../../../Hooks/useCurrentTab'
import ContentBox from './ContentBox'
import Tab from './Tab'
function ServieceTab() {
  const tabs = ['IT 컨설팅','서비스 기획','UX / UI 디자인','프로젝트 개발',]
  const tabItems = [
    {
      title:'개발 방향성 수립과 아이디어 구체화',
      desc:`아이디어 단계인 고객, 처음 IT 사업을 시작하는 분들에게 꼭 필요한 과정입니다.
      개발 방향성을 함께 수립하고 고객의 상황에 맞게 프로젝트 규모를 함께 산정합니다.`,
      link:'',
      icon:<IconServieTab01/>,
    },
    {
      title:'프로젝트 상세기획 및 구조설계',
      desc:`아이디어 단계를 마치고 프로젝트 규모가 산정된 분들과 진행하는 과정입니다.
      프로젝트의 메뉴구조도를 바탕으로 상세기획 및 와이어프레임작업을 진행합니다.`,
      link:'',
      icon:<IconServieTab02/>
    },
    {
      title:'프로젝트 디자인 및 개발 가이드 전달',
      desc:`User의 사용성과 편의를 고려하여 GUI 작업을 완성합니다.  
      개발작업을 효율적으로 진행할 수 있도록 Style Guide 및 기초 Icon들을 제작합니다.`,
      link:'',
      icon:<IconServieTab03/>
    },
    {
      title:'프로젝트 개발 및 배포',
      desc:`완성된 기획서 및 디자인을 바탕으로 DB설계와 컴포넌트를 제작합니다.
      DB설계, 서버세팅, 퍼블리싱, API개발 및 연동, 배포 모든 개발과정을 포함합니다.`,
      link:'',
      icon:<IconServieTab04/>
    }
  ]

  const {currentTab, onClickCurrent } = useClick(0);
  return (
    <Wrapper>
      <ContentBox>
        <Tab  
          list={tabs}  
          onClick={onClickCurrent}
          currentTab={currentTab}
        />
          <TabItem className='tabItem'>
            {
              tabItems.filter((_,idx) => idx === currentTab).map((i ,index) => {
                const { title, desc, link, icon} = i;
                return (
                  <React.Fragment key={index}>
                    <i>{icon}</i>
                    <strong className='tabTit'>{title}</strong>
                    <p className='tabDesc'>{desc}</p>
                    <Link to={link} className="detailLink">자세히보기</Link>
                  </React.Fragment>
                )
              })
            }
          </TabItem>
      </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.tabs {
    width:100%;
    button {
      width:25%;
      padding:13px 0;
      font-size: 20px;
      line-height:34px;
    }
  }
`
const TabItem = styled.div`
  position:relative;
  min-height:120px;
  padding-left:180px;
  margin-top:60px;
  i {
    position: absolute;
    left:0;
    top:0;
  }
  .tabTit {
    display:inline-block;
    margin-bottom:20px;
    font-size: 24px;
    line-height:40px;
    font-weight: bold;
    color: var(--primary-primary);
  }
  .tabDesc {
    font-size: 18px;
    line-height:30px;
    color: var(--gray-scale-gray-8);
    white-space: pre-line;
  }
  .detailLink {
    display: inline-block;
    position: absolute;
    right:0;
    top:60px;
    width:176px;
    padding:9px 0;
    border-radius: 8px;
    border: solid 1px var(--primary-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: normal;
    text-align: center;
    color: var(--primary-primary);
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
      @media screen and ${tablet} {
        padding:0 140px 0 100px;
        margin-top:32px;
        .tabTit {
          margin-bottom:12px;
          font-size: 20px;
          line-height:30px;
        }
        .tabDesc {
          font-size: 16px;
          line-height:27px;
        }
        .detailLink {
          display: inline-block;
          top:30px;          
          width:120px;
          font-size: 14px;
        }
        i {
          
          svg {
            width:80px;
            height:80px;
          }
        }
      }
      @media screen and ${mobile} {
      }
    `
  }}
`
export default ServieceTab