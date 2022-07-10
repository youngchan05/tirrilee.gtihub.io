import styled from 'styled-components'

function ServiceSection({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-bottom:80px;
    .tit {
        font-size: 32px;
        font-weight: bold;
        line-height: 1.5;
        color: #000;
    }
    .subTit{
        margin-top:12px;
        font-size: 16px;
        line-height: 1.7;
        color: #3b3f4a;
        +.checkListBox {
            margin-top:32px;
        }
        + div {
            margin-top:32px;
        }
    }
`
export default ServiceSection