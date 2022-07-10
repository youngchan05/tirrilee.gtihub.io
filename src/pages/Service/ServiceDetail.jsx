import React from 'react'
import styled from 'styled-components'
import { useLocation, useParams} from 'react-router-dom'
import ServiceTop from '../../components/UI/molecules/ServiceTop';
import { serviceData } from './data';
import ServiceSection from '../../components/UI/organisms/ServiceSection';
import ContentBox from '../../components/UI/molecules/ContentBox';
import CheckList from '../../components/UI/molecules/CheckList';
import ProcessStep from '../../components/UI/molecules/ProcessStep';

function ServiceDetail() {
    const params = useParams();
    const selectedItem = serviceData[params.type];
    const { 
      explanation, 
      introduction, 
      process,
      basic,
      pro,
      premium,
      master,
      processItem,
    }  = selectedItem ;
  return (
    <Wrapper>
        <ServiceTop data={selectedItem}/>
        <ContentBox>
          <ServiceSection>
            <strong className='tit'>서비스 설명</strong>
            <p className='subTit'>{explanation}</p>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>서비스 소개</strong>
            <p className='subTit'>{introduction}</p>
            <div className="checkListWrapper">
              <CheckList data={basic}/>
              <CheckList data={pro}/>
              {premium &&  <CheckList data={premium}/>}
              {master &&  <CheckList data={master}/>}
            </div>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>전체 프로세스</strong>
            <p className='subTit'>{process}</p>
            <ProcessStep activeStep={processItem}/>
          </ServiceSection>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .checkListWrapper {
    display:flex;
    .checkListBox {
      flex:1;
      + .checkListBox {
        margin-left:20px;
      }
      .list {
        width:100%;
      }
    }
  }
`
export default ServiceDetail