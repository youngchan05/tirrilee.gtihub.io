import React from 'react'
import styled, { css } from 'styled-components'
import SubTit from '../../components/UI/atoms/SubTit'
import ContentBox from '../../components/UI/molecules/ContentBox'
import MemberBox from '../../components/UI/molecules/MemberBox'
import Tab from '../../components/UI/molecules/Tab'
import Employment from '../../components/UI/organisms/Employment'
import MemberWrapper from '../../components/UI/organisms/MemberWrapper'
import useClick from '../../Hooks/useCurrentTab'
import { members } from './data'

function Team() {
  const {currentTab , onClickCurrent} = useClick(0);
  const tabList = ['All','Leader','Manager','Designer','Developer'];
  return (
    <Wrapper>
      <ContentBox>
        <Title>
        <strong> We are just a <span>Team.<br className='isTablet' /></span> Not a part.</strong>
          <p>티릴리는 모든 프로젝트의 클라이언트와 한 팀이 되어 일하는 것을 추구합니다.<br/>
          프로젝트 완료가 목적이 아닌, 성장 가능성 있는 프로젝트로 만들기 위해 함께 고민합니다.</p>
        </Title>
      </ContentBox>
      <TeamVision>
        <ContentBox>
          <div className='visionText'>
              <strong><span>I</span><br/>주인 의식</strong>
              <p>일에 대한 책임감과<br/>
              주인의식을 갖고 일합니다.</p>
          </div>
          <div className='visionText'>
              <strong><span>YOU</span><br/>상호 존중</strong>
              <p>서로의 롤을 이해하고 존중하는<br/>
              커뮤니케이션을 합니다.</p>
          </div>
          <div className='visionText'>
              <strong><span>WE</span><br/>함께 성장</strong>
              <p>업무를 통해 모든 구성원과<br/>
            회사의 동시 성장을 지향합니다.</p>
          </div>
          <div className='visionText'>
              <strong><span>TOGETHER</span><br/>가치 나눔</strong>
              <p>업무를 통해 모든 구성원과<br/>
              회사의 동시 성장을 지향합니다.</p>
          </div>
        </ContentBox>
      </TeamVision>
      <MemberList>
        <ContentBox>
          <SubTit text={'Members'}/>
          <Tab
              list={tabList}
              onClick={onClickCurrent}
              currentTab={currentTab}
          />
          <MemberWrapper>
            {members.filter((i) => {
                return tabList[currentTab] === 'All' ? 
                i :
                tabList[currentTab] === i.tag
            }).map((i, idx)=> <MemberBox key={idx} member={i}/>)}
          </MemberWrapper>
        </ContentBox>
      </MemberList>
      <Employment/>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
const Title = styled.div`
  padding:120px 0 60px 0;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.5;
  text-align: left;
  color: var(--gray-scale-black);
  strong {
      font-weight: inherit;
  }
  span {
      font-weight: inherit;
      color: var(--primary-primary);
  }
  p {
      margin-top:16px;
      font-size: 20px;
      line-height: 1.7;
      color: var(--gray-scale-gray-9);
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${tablet} {
          padding:80px 0 60px 0;
          font-size: 32px;
          line-height:48px;
          p {
            font-size: 18px;
        }
        }
        @media screen and ${mobile} {
        }
    `
  }}
`
const TeamVision = styled.div`
  padding:44px 0;
  background-color: var(--gray-scale-gray-1);
  .contentBox {
    display:flex;
  }
  .visionText {
    width:25%;
    strong {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.7;
      color: var(--gray-scale-black);
      span {
        display:inline-block;
        margin-bottom:4px;
        font-size: 16px;
        line-height: 1.7;
        color: var(--primary-primary);
      }
    }
    p {
      margin-top:4px;
      font-size: 16px;
      line-height: 1.7;
      color: var(--gray-scale-black);
    }
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${tablet} {
          padding:40px 0;
          .visionText {
            strong {
              font-size: 20px;
              line-height: 30px;
            }
            p {
              margin-top:4px;
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
        @media screen and ${mobile} {
        }
    `
  }}
`
const MemberList = styled.div`
  padding:160px 0 120px 0;
  .tabs {
    margin:20px 0 32px 0;
    justify-content: flex-start;
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${tablet} {
          padding:80px 0;
          .tabs {
            justify-content: flex-start;
          }
        }
        @media screen and ${mobile} {
        }
    `
  }}
`
export default Team