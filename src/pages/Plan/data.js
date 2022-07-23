import { IconAws, IconFirebase, IconNode, IconPlanMvp, IconPlanPremium, IconPlanProduct, IconPlutter, IconReact, IconServieTab01, IconServieTab02, IconServieTab03, IconServieTab04 } from "../../common/svg"

const mvp = {
    sub:'Plan',
    title:'MVP 플랜',
    icon:<IconPlanMvp/>,
    color:'#00c9c9',
    bgColor:'rgba(0, 201, 201, 0.1)',
    explanation:'빠른 시장검증이 필요하다면? 검증하고자 하는 핵심 기능만 담아 개발하는 과정입니다.',
    introduction:'MVP 플랜의 완성 기간은 총 9주+@로, 약 2개월 과정입니다.',
    items:{
        consulting: {
            name:'IT 컨설팅',
            icon:<IconServieTab01/>,
            tag:'Basic',
            planItem:'아이디어 구체화 및 개발 방향성 수립',
            pay:'20만원 / 1회'
        },
        planning: {
            name:'서비스 기획',
            icon:<IconServieTab02/>,
            tag:'Basic',
            planItem:'와이어프레임 기획 및 기능명세서',
            pay:'약 250만 원'
        },
        design: {
            name:'UX/UI 디자인',
            icon:<IconServieTab03/>,
            tag:'Basic',
            planItem:'화면디자인 및 가이드 제공',
            pay:'약 250만 원'
        },
        development:{
            name:'프로젝트 개발',
            icon:<IconServieTab04/>,
            tag:'Basic',
            planItem:'풀스택 개발자 1명',
            pay:'1,000만 원 / 월'
        },
    },
    price:'App 기준 약 2,500만 원+@기능 추가 비용이 발생합니다.',
    stack :[
        {
            name:'Flutter',
            language:'App Front-end',
            icon:<IconPlutter/>
        },
        {
            name:'React',
            language:'Web Front-end',
            icon:<IconReact/>
        },
        {
            name:'Firebase',
            language:'Back-end',
            icon:<IconFirebase/>
        }
    ],
    faq:[
        {
            ask:'MVP 플랜은 누구에게 적합한가요?',
            answer:`MVP 플랜은 빠르게 시장검증이 필요하신 분들에게 적합하며
            처음으로 IT 서비스를 준비하시는 예비 창업자 분들에게 추천하는 플랜입니다.`
        },
        {
            ask:'MVP 플랜의 특징은 무엇인가요?',
            answer:`빠르게 핵심기능만을 담은 서비스를 시장에 선보일 수 있습니다.
            빠른 시장검증으로 서비스를 확장하거나 피봇팅을 쉽게 진행할 수 있습니다.`
        },
    ]
}
const product = {
    sub:'Plan',
    title:'Product 플랜',
    icon:<IconPlanProduct/>,
    color:'#00ace9',
    bgColor:'rgba(0, 172, 233, 0.1)',
    explanation:'서비스의 최소 개발은? 핵심기능 + 필수기능을 담아 개발하는 과정입니다.',
    introduction:'Product 플랜의 완성 기간은 총 16주 +@부터 기능 추가에 따라 변경됩니다.',
    items:{
        consulting: {
            name:'IT 컨설팅',
            icon:<IconServieTab01/>,
            tag:'Basic',
            planItem:'아이디어 구체화 및 개발 방향성 수립',
            pay:'20만원 / 1회'
        },
        planning: {
            name:'서비스 기획',
            icon:<IconServieTab02/>,
            tag:'Pro',
            planItem:'와이어프레임 기획 및 기능명세서',
            pay:'약 500만 원'
        },
        design: {
            name:'UX/UI 디자인',
            icon:<IconServieTab03/>,
            tag:'Basic',
            planItem:'화면디자인 및 가이드 제공',
            pay:'약 250만 원'
        },
        development:{
            name:'프로젝트 개발',
            icon:<IconServieTab04/>,
            tag:'Pro',
            planItem:'풀스택 개발자 1명',
            pay:'1,500만 원 / 월'
        },
    },
    price:'App기준 약 5,250만 원+@기능 추가 비용이 발생합니다.',
    stack :[
        {
            name:'React',
            language:'Web Front-end',
            icon:<IconReact/>
        },
        {
            name:'Node.js',
            language:'Back-end',
            icon:<IconNode/>
        },
        {
            name:'Amazon Web Service',
            language:'Server',
            icon:<IconAws/>
        },
    ],
    faq:[
        {
            ask:'Product 플랜은 누구에게 적합한가요?',
            answer:`Product 플랜은 1차 시장검증이 완료된 분들에게 적합하며 
            기존에 콘텐츠를 확보하거나 User들을 확보하신 분들에게 추천하는 플랜입니다.`
        },
        {
            ask:'Product 플랜의 특징은 무엇인가요?',
            answer:`핵심기능과 필수기능을 고려하여 DB를 설계하기 때문에 
            확장성을 고려하여 개발을 진행할 수 있습니다.`
        },
    ]
}
const premium = {
    sub:'Plan',
    title:'Premium 플랜',
    icon:<IconPlanPremium/>,
    color:'#226bef',
    bgColor:'#e8f0fe',
    explanation:'고도화된 개발이 필요하다면? 서비스에 필요한 전체 기능을 담아 개발하는 과정입니다.',
    introduction:'Premium 플랜의 완성 기간은 총 28주 +@로, 약 7개월 과정입니다.',
    items:{
        consulting: {
            name:'IT 컨설팅',
            icon:<IconServieTab01/>,
            tag:'Basic',
            planItem:'아이디어 구체화 및 개발 방향성 수립',
            pay:'20만원 / 1회'
        },
        planning: {
            name:'서비스 기획',
            icon:<IconServieTab02/>,
            tag:'Pro',
            planItem:'와이어프레임 기획 및 기능명세서',
            pay:'약 500만 원'
        },
        design: {
            name:'UX/UI 디자인',
            icon:<IconServieTab03/>,
            tag:'Pro',
            planItem:'화면디자인 및 가이드 제공',
            pay:'약 500만 원'
        },
        development:{
            name:'프로젝트 개발',
            icon:<IconServieTab04/>,
            tag:'Premium',
            planItem:'풀스택 개발자 1명',
            pay:'2,500만 원 / 월'
        },
    },
    price:'App 기준 약 8,520만 원+@기능 추가 비용이 발생합니다.',
    stack :[
        {
            name:'React',
            language:'Web Front-end',
            icon:<IconReact/>
        },
        {
            name:'Node.js',
            language:'Back-end',
            icon:<IconNode/>
        },
        {
            name:'Amazon Web Service',
            language:'Server',
            icon:<IconAws/>
        },
    ],
    faq:[
        {
            ask:'Premium 플랜은 누구에게 적합한가요?',
            answer:`Premium 플랜은 기존 서비스를 운영하고 있지만 다시 서비스를 개발하거나
            장기적으로 IT 서비스를 제작하고 싶은 장기고객에게 추천하는 플랜입니다.`
        },
        {
            ask:'Premium 플랜의 특징은 무엇인가요?',
            answer:`서비스 전체 기능을 고려하여 처음 설계 단계부터 신중하게 진행합니다.
            기능이 복잡하거나 대규모 프로젝트를 제작할 때 적합하기 합니다.`
        },
    ]
}
export const plandata = {
    mvp,
    product,
    premium,
}