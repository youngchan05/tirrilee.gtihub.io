import React, {useState} from 'react'
import styled from 'styled-components'
import Title from '../../components/UI/atoms/Title'
import ContentBox from '../../components/UI/molecules/ContentBox'
import DetailView from '../../components/UI/organisms/DetailView'

function FeedDetail() {
    const [ data, setdata] = useState({
        title:'2021 Seoul Design Festival 참여',
        feed:'티릴라 소식',
        date:'2022.06.17'
    })
  return (
    <Wrapper>
        <FeedImg>
        </FeedImg>
        <ContentBox>
            <DetailView>
                <Title text={data.title}/>
                <dl>
                    <dt>Feed</dt>
                    <dd>{data.feed}</dd>
                </dl>
                <dl>
                    <dt>Date</dt>
                    <dd>{data.date}</dd>
                </dl>
            </DetailView>
            <FeedViewBox>
                <p>티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다.</p>
                <div className="imgBox">
                    <img src="/images/Home_Banner_1@2x.png" alt="" />
                </div>
                <p>티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다.</p>
                <div className="imgBox">
                    <img src="/images/Home_Banner_1@2x.png" alt="" />
                </div>
                <button type="button">맨 위로</button>
            </FeedViewBox>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .feedInfo {
        padding-bottom:48px;
        border-bottom:1px solid var(--gray-scale-gray-3);
        .contentTit {
            margin-bottom:40px;
        }
        dl {
            display:flex;
            dt{
                width:78px;
                margin-right:20px;
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: left;
                color: var(--gray-scale-gray-8);
            }
            dd{
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.7;
                letter-spacing: normal;
                text-align: left;
                color: var(--gray-scale-gray-8);
            }
            + dl {
                margin-top:20px;
            }
        }
    }
`

const FeedImg = styled.div`
    width:100%;
    height:480px;
    margin-bottom:48px;
    background-color: var(--primary-p-100);
    img {
        width:100%;
        height:100%;
    }
    
`
const FeedViewBox = styled.div`
    padding: 48px 0 80px 0;
    img {
        width:100%;
    }
`

export default FeedDetail