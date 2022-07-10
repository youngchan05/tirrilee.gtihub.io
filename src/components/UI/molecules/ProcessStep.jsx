import React from 'react'
import styled from 'styled-components'

function ProcessStep({activeStep}) {
    const steps = ['개발 방향성 설정','프로젝트 규모 산정','서비스 정책 논의', '상세기획','UX/UI 디자인', '개발 가이드 전달', '프로젝트 개발', '배포/관리']
    console.log(activeStep ,'activeStep')
  return (
    <Wrapper>
        <ul>
        {
            steps.map((i, idx) => {
                return <li className={activeStep.includes(idx + 1) ? 'active' : ''}>
                    <span>{idx + 1}</span>
                    <p>{i}</p>
                </li>
            })
        }
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    ul {
        display:flex;
        li {
            flex: 1;
            text-align:center;
            span {
                display: inline-flex;
                width:24px;
                height:24px;
                margin-bottom:14px;
                border-radius: 12px;
                background-color: #f9fafc;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                line-height: 1.7;
                color: #bec1c7;
            }
            p {
                width:100%;
                padding: 12px 0;
                border-radius: 8px;
                background-color: #f9fafc;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.5;
                text-align: center;
                color: #bec1c7;
            }
            + li {
                margin-left:16px;
            }
            &.active {
                span,p {
                    background-color: #e8f0fe;
                    color: #226bef;
                }
                
            }
        }
    }
`

export default ProcessStep