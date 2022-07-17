import React from 'react'
import styled, { css } from 'styled-components'
import BrandItems from '../../components/UI/molecules/BrandItems'
import ContentBox from '../../components/UI/molecules/ContentBox'
import FeedList from '../../components/UI/molecules/FeedList'
import HomeBanner from '../../components/UI/molecules/HomeBanner'
import HomeCards from '../../components/UI/molecules/HomeCards'
import SectionText from '../../components/UI/molecules/SectionText'
import ServieceTab from '../../components/UI/molecules/ServieceTab'

function Home() {
  return (
    <Wrapper className='home'>
      <HomeBanner img={'Home_Banner_1@2x'} bgColor={'var(--primary-primary)'}/>
      <div className="cradSection">
        <HomeCards/>
      </div>
      <div className="TextBanner">
        <SectionText TextColor={'var(--primary-primary);'}>
          <strong className='title'>Lanch<br className='isTablet'/> Your Idea to Service</strong>
          <p className='desc'>
            티릴리와 함께 아이디어를 서비스로 만들어보세요.<br/>
            IT 컨설팅부터 시작하여 개발 단계까지 통합 개발 에이전시 그룹입니다.
          </p>
        </SectionText>
      </div>
      <div className="branSection">
        <SectionText>
          <p className='sub'>TIrrilee Product</p>
          <strong className='title'>Tirrilee Brand</strong>
          <p className='desc'>
          티릴리가 자체적으로 운영하는 서비스입니다.<br/>
          고객의 소리를 듣고 시장에 필요한 서비스를 만들어 지속적인 가치를 창출합니다. 
          </p>
        </SectionText>
        <BrandItems/>
      </div>
      <div className="serviceSection">
        <SectionText>
          <p className='sub'>Tirrilee Service</p>
          <strong className='title'>What We Do</strong>
        </SectionText>
        <ServieceTab/>
      </div>
      <div className="feedSection">
        <SectionText>
          <p className='sub'>Tirrilee News</p>
          <strong className='title'>Tirrilee Feed</strong>
        </SectionText>
        <ContentBox>
          <FeedList/>
        </ContentBox>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .cradSection {
    padding-bottom:120px;
  }
  .TextBanner {
    padding:82px 0;
    background-color: var(--gray-scale-gray-1);
  }
  .branSection {
    padding:160px 0;
    .sectionTitle {
      margin-bottom:48px;
    }
  }
  .serviceSection {
    padding-bottom:160px;
    .sectionTitle {
      margin-bottom:48px;
    }
  }
  .feedSection {
    padding:120px 0;
    background-color: var(--gray-scale-gray-1);
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
      @media screen and ${tablet} {
        ${tabletStyle}
      }
      @media screen and ${mobile} {
        ${mobileStyle}
      }
    `
  }}
`

const tabletStyle =  css`
  .cradSection {
    padding-bottom:100px;
  }
  .TextBanner {
    padding:48px 0;
  }
  .branSection {
    padding:100px 0;
    .sectionTitle {
      margin-bottom:32px;
    }
  }
  .serviceSection {
    padding-bottom:100px;
    .sectionTitle {
      margin-bottom:16px;
    }
  }
  .feedSection {
    padding:80px 0;
    background-color: var(--gray-scale-gray-1);
  }
  
`

const mobileStyle =  css`

`
export default Home