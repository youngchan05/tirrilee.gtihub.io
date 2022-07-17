import React from 'react'
import styled, { css } from 'styled-components'
import Title from '../../components/UI/atoms/Title'
import ContentBox from '../../components/UI/molecules/ContentBox'
import Tab from '../../components/UI/molecules/Tab'
import WorkItem from '../../components/UI/molecules/WorkItem'
import WorkWrapper from '../../components/UI/organisms/WorkWrapper'
import useClick from '../../Hooks/useCurrentTab'

function Work() {
    const {currentTab , onClickCurrent} = useClick(0);
    const tabList = ['All','Premium','Product','MVP'];
    const workItmes = [
        {
            tag:'Premium',
            plan:'MVP',
            type:['web','mobile'],
            title:'2021 Seoul Design Festival 참여',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            client:'여행에 미치다',
            period:'2021/07 ~ 2021/12',
            color:'red',
            link:'1',
            url:'',
        },
        {
            tag:'Product',
            plan:'MVP',
            type:['web'],
            title:'여미 YEOMI : 여행의 설렘부터 경험까지',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            client:'여행에 미치다',
            period:'2021/07 ~ 2021/12',
            color:'red',
            link:'1',
            url:'',
        },
        {
            tag:'MVP',
            plan:'MVP',
            type:['web','mobile'],
            title:'여미 YEOMI : 여행의 설렘부터 경험까지',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            client:'여행에 미치다',
            period:'2021/07 ~ 2021/12',
            color:'red',
            link:'1',
            url:'',
        },
        {
            tag:'MVP',
            plan:'MVP',
            type:['mobile'],
            title:'여미 YEOMI : 여행의 설렘부터 경험까지',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            client:'여행에 미치다',
            period:'2021/07 ~ 2021/12',
            color:'red',
            link:'1',
            url:'',
        }
    ]
  return (
    <Wrapper>
        <ContentBox>
            <Title text={'Tirrilee Works'}/>
            <Tab
                list={tabList}
                onClick={onClickCurrent}
                currentTab={currentTab}
            />
            <WorkWrapper>
                {

                    workItmes.filter((i) => {
                        return tabList[currentTab] === 'All' ? 
                        i :
                        tabList[currentTab] === i.tag
                    }).map((i, idx) => {
                        return <WorkItem item={i} key={idx}/>
                    })
                }
            </WorkWrapper>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding:120px 0;
    .tabs {
        justify-content: flex-start;
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding:80px 0 120px 0;
                .tabs {
                    margin-top:20px;
                    justify-content: flex-start;
                }
            }
            @media screen and ${mobile} {
            }
        `
    }}
`

export default Work