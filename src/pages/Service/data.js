import { IconBasic, IconConsulting, IconDesign, IconDevelopment, IconDevelopmentMaster, IconDevelopmentPreminum, IconPlanMvp, IconPro, IconServicePlanning } from "../../common/svg"

const consulting = {
    sub:'Service',
    title:'IT 컨설팅',
    icon:<IconConsulting/>,
    color:'#ffcd4d',
    bgColor:'rgba(255, 201, 77, 0.1)',
    explanation:'아이디어 단계라면? 프로젝트 구체화가 필요하다면? 전문가와 함께 개발 방향성과 프로젝트 규모를 산정해보세요.',
    introduction:'현재 내게 필요한 IT 컨설팅 서비스를 만나보세요.',
    process:'IT컨설팅 서비스는 전체 IT 서비스 제작 프로세스 중 1, 2 번에 해당합니다.',
    processItem:[1,2],
    basic:{
        icon:<IconBasic/>,
        title:'IT 컨설팅 (기본)',
        sub:'Basic',
        desc:'아이디어 구체화 및 개발 방향성 수립 ',
        price:'20만원 / 1회',
        list:[
            {
                title:'아이디어 구체화',
                isActive:true,
            },
            {
                title:'개발 방향성 수립',
                isActive:true,
            },
            {
                title:'핵심 메뉴구조도 작업',
                isActive:true,
            },
            {
                title:'핵심 기능명세서',
            },
            {
                title:'기획안 예시 화면',
            },
        ]
    },
    pro:{
        icon:<IconPro/>,
        title:'IT 컨설팅 (심화)',
        sub:'Pro',
        desc:'아이디어 구체화 + 핵심 기능 추출',
        price:'50만원 / 1회',
        list:[
            {
                title:'아이디어 구체화',
                isActive:true,
            },
            {
                title:'개발 방향성 수립',
                isActive:true,
            },
            {
                title:'핵심 메뉴구조도 작업',
                isActive:true,
            },
            {
                title:'핵심 기능명세서',
                isActive:true,
            },
            {
                title:'기획안 예시 화면',
                isActive:true,
            },
        ]
    },
    faq:[
        {
            ask:'IT 컨설팅은 누가 받아야 하나요?',
            answer:`기본적으로 큰 그림은 있지만 아직 아이디어 단계이신 분들, 
            기획 구체화가 필요한 분들, 프로젝트 규모를 명확히 알고싶은 분들께 적합합니다.`
        },
        {
            ask:'꼭 IT 컨설팅을 받아야 하나요?',
            answer:`아니요. 그렇지 않습니다. 
            프로젝트에 대한 규모 산정이 완료되었고 초기 기획안이 있다면 바로 서비스 기획 과정으로 문의주실 수 있습니다 :)`
        },
    ]
}
const servicePlanning = {
    sub:'Service',
    title:'서비스 기획',
    icon:<IconServicePlanning/>,
    color:'#00e6ca',
    bgColor:'rgba(0, 230, 202, 0.1)',
    explanation:'프로젝트 규모 산정이 완료되었다면? 메뉴구조도를 바탕으로 상세기획 및 와이어프레임을 작업합니다.',
    introduction:'현재 내게 필요한 서비스 기획을 선택해보세요.',
    basic:{
        icon:<IconBasic/>,
        title:'서비스 기획 (기본)',
        sub:'Basic',
        desc:'와이어프레임 기획 및 기능명세서',
        price:'250만원 / 3주',
        list:[
            {
                title:'메뉴구조도',
                isActive:true,
            },
            {
                title:'기능명세서 작성',
                isActive:true,
            },
            {
                title:'와이어프레임 (30P 내외)',
                isActive:true,
            },
            {
                title:'서비스 정책',
            },
            {
                title:'스토리보드',
            },
        ]
    },
    pro:{
        icon:<IconPro/>,
        title:'서비스 기획 (심화)',
        sub:'Pro',
        desc:'서비스정책 + 스토리보드',
        price:'500만원 / 5주',
        list:[
            {
                title:'메뉴구조도',
                isActive:true,
            },
            {
                title:'기능명세서 작성',
                isActive:true,
            },
            {
                title:'와이어프레임 (30P 내외)',
                isActive:true,
            },
            {
                title:'서비스 정책',
                isActive:true,
            },
            {
                title:'스토리보드',
                isActive:true,
            },
        ]
    },
    process:'서비스 기획은 전체 IT 서비스 제작 프로세스 중 3, 4 번에 해당합니다.',
    processItem:[3,4],
    faq:[
        {
            ask:'서비스 기획은 언제 진행되나요?',
            answer:`서비스 기획은 프로젝트 규모산정이 완료되면 진행할 수 있습니다.
            우선 메뉴구조도(또는 I.A)를 활용해 전체 화면 구조를 파악한 후 상세 기획을 진행합니다.`
        },
        {
            ask:'서비스 기획은 어떻게 진행되나요?',
            answer:`1차 메뉴구조도를 기준으로 상세 기획을 진행합니다. 
            이후 커뮤니케이션 과정을 통해서 피드백을 주고받으며 최종 기획안을 완성합니다.`
        },
    ]
}
const design = {
    sub:'Service',
    title:'UX/UI 디자인',
    icon:<IconDesign/>,
    color:'#ff5f5f',
    bgColor:'rgba(255, 95, 95, 0.1)',
    explanation:'서비스 기획 과정이 끝났다면? 와이어프레임에 UX를 고려하여 GUI를 진행하고 Sytle Guide를 제작합니다.',
    introduction:'현재 내게 필요한 UX/UI 단계를 선택해보세요.',
    process:'UX/UI 디자인 과정은 전체 IT 서비스 제작 프로세스 중 5, 6 번에 해당합니다.',
    processItem:[5,6],
    basic:{
        icon:<IconBasic/>,
        title:'UX / UI 디자인',
        sub:'Basic',
        desc:'화면디자인 및 가이드 제공',
        price:'250만원 / 3주',
        list:[
            {
                title:'GUI 디자인',
                isActive:true,
            },
            {
                title:'스타일가이드',
                isActive:true,
            },
            {
                title:'레퍼런스 시안 2안',
                isActive:true,
            },
        ]
    },
    pro:{
        icon:<IconPro/>,
        title:'UX / UI / Graphic 디자인',
        sub:'Pro',
        desc:'화면디자인 및 아이콘 제공',
        price:'50만원 / 1회',
        list:[
            {
                title:'GUI 디자인',
                isActive:true,
            },
            {
                title:'스타일가이드',
                isActive:true,
            },
            {
                title:'레퍼런스 시안 3안',
                isActive:true,
            },
            {
                title:'기본 아이콘작업 등',
                isActive:true,
            },
        ]
    },
    faq:[
        {
            ask:'UX/UI 디자인은 언제 진행되나요?',
            answer:`일반적으로 서비스 기획을 마친 후 진행하지만,
            규모가 작은 프로젝트는 서비스 기획 단계와 동시에 진행될 수 있습니다.`
        },
        {
            ask:'UX/UI 디자인은 어떻게 진행되나요?',
            answer:`고객의 요구사항과 레퍼런스를 바탕으로 메인 시안을 제공합니다. 
            이후 피드백 소통단계를 거쳐 전체 페이지 최종 디자인을 완성합니다.`
        },
        {
            ask:'Style Guide는 무엇인가요?',
            answer:`Style Guide란, 서비스 고객에게 일관적인 브랜드 경험을 주기위한 디자인 가이드입니다.
            본격적인 GUI 단계를 진행하기 이전에 컬러, 스타일, R값 등을 통일성있게 정의합니다.`
        },
        {
            ask:'로고, 일러스트 디자인은 작업에 포함되나요?',
            answer:`기본적으로 로고, 일러스트 디자인은 UX/UI 디자인에 포함되지 않습니다. 
            별도의 기초 브랜딩 서비스를 신청해주셔야 합니다.`
        }
    ]

}
const development = {
    sub:'Service',
    title:'프로젝트 개발',
    icon:<IconDevelopment/>,
    color:'#3fc5ff',
    bgColor:'rgba(63, 197, 255, 0.1)',
    explanation:'완료된 기획서 및 디자인을 바탕으로 프로젝트를 개발합니다. 퍼블리싱,  DB설계, 서버세팅, API개발 및 연동, 배포 모든 개발과정을 포함합니다.',
    introduction:'프로젝트에 적절한 개발 등급을 선택해보세요.',
    process:'프로젝트 개발은 전체 IT 서비스 제작 프로세스 중 7, 8 번에 해당합니다.',
    processItem:[7,8],
    basic:{
        icon:<IconBasic/>,
        title:'프로젝트 개발 (기본)',
        sub:'Basic',
        desc:'풀스택 개발자 1명',
        price:'1,000만 원 / 월',
        list:[
            {
                title:'개발자 1명 (Full-Stack)',
                isActive:true,
            },
            {
                title:'PM 부분 관리',
                isActive:true,
            },
            {
                title:'Flutter',
                isActive:true,
            },
            {
                title:'Firebase',
                isActive:true,
            },
            {
                title:'유지보수',
            },
        ]
    },
    pro:{
        icon:<IconPro/>,
        title:'프로젝트 개발 (심화)',
        sub:'Pro',
        desc:'개발자 2명',
        price:'1,500만 원 / 월',
        list:[
            {
                title:'개발자 1명 (Full-Stack)',
                isActive:true,
            },
            {
                title:'PM 부분 관리',
                isActive:true,
            },
            {
                title:'Flutter',
                isActive:true,
            },
            {
                title:'Firebase',
                isActive:true,
            },
            {
                title:'유지보수',
                isActive:true,
            },
        ]
    },
    premium:{
        icon:<IconDevelopmentPreminum/>,
        title:'프로젝트 개발 (기본)',
        sub:'Premium',
        desc:'개발자 3명',
        price:'2,500만 원 / 월',
        list:[
            {
                title:'개발자 3명 (Front/Back)',
                isActive:true,
            },
            {
                title:'전담 PM 배정',
                isActive:true,
            },
            {
                title:'React (RN)',
                isActive:true,
            },
            {
                title:'Node.js',
                isActive:true,
            },
            {
                title:'유지보수',
                isActive:true,
            },
        ]
    },
    master:{
        icon:<IconDevelopmentMaster/>,
        title:'프로젝트 개발 (고급)',
        sub:'Master',
        desc:'개발자 4명',
        price:'3,000만 원 / 월',
        list:[
            {
                title:'개발자 4명 (Front/Back)',
                isActive:true,
            },
            {
                title:'전담 PM 배정',
                isActive:true,
            },
            {
                title:'Flutter or React (RN)',
                isActive:true,
            },
            {
                title:'Firebase or Node.js',
                isActive:true,
            },
            {
                title:'유지보수',
                isActive:true,
            },
        ]
    },
    faq:[
        {
            ask:'개발 기술 스택은 어떻게 되나요?',
            answer:`App 개발은 Flutter 또는 React-Native로 개발하고, Web 개발은 React.js로 개발합니다.
            Back-end는 주로 Node.js를 활용합니다.`
        },
        {
            ask:'서버/DB는 어떻게 구성되나요?',
            answer:`주로 AWS 활용하며 규모가 작은 프로젝트들은 GCP를 활용합니다.
            DB는 보통 Mysql 을 활용하며 프로젝트에 따라 변경될 수 있습니다.`
        },
        {
            ask:'프로젝트 개발 단계의 가장 큰 차이는 무엇인가요?',
            answer:`프로젝트 규모에 따라서 개발자분들의 투입 정도를 구분합니다.
            현재 프로젝트의 상황에 맞는 개발 방식을 선택하여 개발합니다.`
        }
    ]
}

const mvp = {
    sub:'Plan',
    title:'MVP 플랜',
    icon:<IconPlanMvp/>,
    color:'#00c9c9',
    bgColor:'rgba(0, 201, 201, 0.1)',
}
export const serviceData = {
    // s: service //
    consulting,
    servicePlanning,
    design,
    development,
    // e: service //
    mvp,
}