import styled, { css } from 'styled-components'

function ServiceSection({children, className}) {
  return (
    <Wrapper className={className}>
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
        + div {
            margin-top:32px;
        }
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
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${mobile} {
                margin-bottom:60px;
                .tit {
                    font-size: 28px;
                    line-height: 42px;
                    + div {
                        margin-top:28px;
                    }
                }
                .subTit{
                    margin-top:8px;
                    +.checkListBox {
                        margin-top:28px;
                    }
                    + div {
                        margin-top:28px;
                    }
                }
            }
        `
    }}
`
export default ServiceSection