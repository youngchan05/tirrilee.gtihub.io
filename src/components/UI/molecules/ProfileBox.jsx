import React from 'react'
import styled from 'styled-components'

function ProfileBox({memberData}) {
    const { profile, position, name, eng, mbti} = memberData;
  return (
    <Wrapper className="profileBox">
        <div className="profile">
            { profile && <img src={profile} alt="" />}
        </div>
        <p className='pos'>{position}</p>
        <div className='nameBox'>
            <strong className='name'>{name}</strong>
            <span className='eng'>{eng}</span>
            <span className='mbti'>{mbti}</span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .profile {
        width: 176px;
        height: 176px;
        margin-bottom:40px;
        border-radius: 8px;
        background-color:#eee;
    }
    .pos {
        margin-bottom:4px;
        font-size: 14px;
        line-height: 1.7;
        color: var(--primary-primary);
    }
    .nameBox {
        display:flex;
        align-items:center;
        .name{
            font-size: 32px;
            font-weight: bold;
            line-height: 1.5;
            color: var(--gray-scale-black);
        }
        .eng{
            margin-left:12px;
            font-size: 16px;
            line-height: 1.7;
            color: var(--gray-scale-black);
        }
        .mbti{
            margin-left:12px;
            font-size: 12px;
            line-height: 1.7;
            color: var(--gray-scale-gray-8);
        }
    }
`
export default ProfileBox