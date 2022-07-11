import React from 'react'
import styled from 'styled-components'
import { IconFirebase, IconPlutter } from '../../common/svg'
import SubTit from '../../components/UI/atoms/SubTit'
import ContentBox from '../../components/UI/molecules/ContentBox'
import ProfileBox from '../../components/UI/molecules/ProfileBox'
import Stack from '../../components/UI/molecules/Stack'
import WorkItem from '../../components/UI/molecules/WorkItem'
import WorkWrapper from '../../components/UI/organisms/WorkWrapper'

function TeamDetail() {
    const data = {
        profile:'',
        position:'Product Onwer',
        name:'정 다 희',
        eng:'Dahee Jeong',
        mbti:'ESFJ 사교적인 외교관',
        skills:[
            {
                name:'Flutter',
                language:'Front-end',
                icon:<IconPlutter/>
            },
            {
                name:'Firebase',
                language:'Back-end',
                icon:<IconFirebase/>
            }
        ]
    }
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
            <Section className='section'>
                <ProfileBox memberData={data}/>
            </Section>
            <Section className='section'>
                <SubTit text={'Skills'}/>
                <Stack stacks={data.skills}/>
            </Section>
            <Section className='section'>
                <SubTit text={'Works'}/>
                <WorkWrapper>
                    {
                        workItmes.map((i, idx) => {
                            return <WorkItem item={i} key={idx}/>
                        })
                    }
                </WorkWrapper>
            </Section>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding:80px 120px;
`

const Section = styled.div`
    .subTit {
        margin-bottom:12px;
    }
    .profileBox {
        margin-bottom:40px;
    }
    + .section {
        border-top: 1px solid var(--gray-scale-gray-3);
        margin-top:40px;
        padding-top:40px;
    }
`
export default TeamDetail