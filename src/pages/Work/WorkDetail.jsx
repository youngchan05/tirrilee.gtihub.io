import React from 'react'
import styled from 'styled-components'
import TextTag from '../../components/UI/atoms/TextTag'
import Button from '../../components/UI/atoms/Button'
import Title from '../../components/UI/atoms/Title'
import ButtonGroup from '../../components/UI/molecules/ButtonGroup'
import ServiceSection from '../../components/UI/organisms/ServiceSection'
import ContentBox from '../../components/UI/molecules/ContentBox'
import DetailView from '../../components/UI/organisms/DetailView'
import SubTit from '../../components/UI/atoms/SubTit'
import Tab from '../../components/UI/molecules/Tab'
import useClick from '../../Hooks/useCurrentTab'
import MemberWrapper from '../../components/UI/organisms/MemberWrapper'
import MemberBox from '../../components/UI/molecules/MemberBox'

function WorkDetail() {
  const {currentTab , onClickCurrent} = useClick(0);
  const data = {
        tag:'Premium',
        plan:'MVP',
        type:['web','mobile'],
        title:'2021 Seoul Design Festival 참여',
        desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
        client:'여행에 미치다',
        period:'2021/07 ~ 2021/12',
        color:'#eee',
        link:'1',
        url:'',
  }

  const members = [
    {
      tag:'Main',
      position:'CEO',
      name:'이 민 재',
      eng:'Minjae Lee',
      mbti:'ENFJ 정의로운 사회운동가',
      profile:'',
    },
    {
      tag:'Sub',
      position:'Dahee Jeong',
      name:'정 다 희',
      eng:'Minjae Lee',
      mbti:'ESFJ 사교적인 외교관',
      profile:'',
    },
    {
      tag:'Sub',
      position:'Developer',
      name:'임 현 성',
      eng:'Minjae Lee',
      mbti:'ISFJ 용감한 수호자',
      profile:'',
    }
  ]
  const tabList = ['All','Main','Sub'];
  return (
    <Wrapper>
      <WorkImgBox bgColor={data.color}></WorkImgBox>
      <ContentBox>
        <DetailView>
          <Title text={data.title}/>
          <dl>
              <dt>Plan</dt>
              <dd>
                <div className="workTags">
                      <TextTag type={data.plan} text={data.plan}/>
                      {
                          data.type && data.type.length > 0 ?
                          data.type.map( i => <TextTag text={i}/>) :null
                      }
                  </div>
              </dd>
          </dl>
          <dl>
              <dt>Client</dt>
              <dd>{data.client}</dd>
          </dl>
          <dl>
              <dt>Period</dt>
              <dd>{data.period}</dd>
          </dl>
        </DetailView>
        <ButtonGroup className="btnGroup">
          <Button className="btn" onClick={ ()=> window.scrollTo(0, 0)} buttonTheme={'sub'}>맨 위로</Button>
          <Button className="btn" >링크 이동</Button>
        </ButtonGroup>
        <SubTit text={'참여 멤버'}/>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom:120px;
  .detailView {
      dl {
        display: flex;
        align-items: center;
      }
      .workTags {
        display:flex;
        div + div {
            margin-left:8px;
        }
      }
    }
    .tabs {
      display:flex;
      justify-content: flex-start;
      margin-top:20px;
    }
  .btnGroup {
    padding:80px 0;
    margin-bottom:48px;
    border-bottom: 1px solid var(--gray-scale-gray-3);
  }
`
const WorkImgBox = styled.div`
  width:100%;
  min-height:430px;
  margin-bottom:40px;
  ${props => {
    return {
      backgroundColor:`${props.bgColor}`,
    }
  }}

`
export default WorkDetail