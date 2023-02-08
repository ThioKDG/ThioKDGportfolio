import {motion} from 'framer-motion';
import Header from '../../layout/Header';

import './subStyles/subInner.scss'

function Sub1(props) {
    const path = process.env.PUBLIC_URL;

    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {/* <Header /> */}
            <section className='subContainer'>
                <div className='titleSpot'>
                    <div className="titleBox">
                        <p className="value">PortFolio</p>
                        <h3 className='title'>포트폴리오 제작일지</h3>
                        <p className='date'>2023 January</p>
                    </div>
                    <div className='thumBox'>
                        <img src={path + '/image/main/portfolio.png'} alt="포트폴리오" />
                    </div>
                </div>
                <div className="contSpot">
                    <div className="Wrapper">
                        <div className="contInner">
                            <ol className='QAlist'>
                                <li>
                                    목표
                                    <div className='textBox'>
                                        <p className='Question'>
                                        포트폴리오 페이지를 제작하면서 목표로 하고자 한 것은 조금 더 리액트에 친숙해지고자 하며,<span>그동안의 작업물들의 정리, 동시에 소개 페이지를 만들기 위해 제작했어요.</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    디렉토리 구조
                                    <div className='textBox'>
                                        <p className='Question txtCenter'>
                                            <img src={path + '/image/sub/dir.png'} alt="디렉토리 설명" />
                                            <ul className='hiddenWord'>
                                                <li>public
                                                    <ul>
                                                        <li>image
                                                            <ul>
                                                                <li>sub</li>
                                                                <li>main</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            <li>src
                                                <ul>
                                                    <li>components
                                                        <ul>
                                                            <li>sub
                                                                <ul>
                                                                    <li>subStyles</li>
                                                                    <li>sub1.js </li>
                                                                    <li>sub2.js... etc </li>
                                                                </ul>
                                                            </li>
                                                            <li>compStyle
                                                                <ul>
                                                                    <li>footerStyle.scss</li>
                                                                    <li>projectStyle.scss</li>
                                                                    <li>rollStyle.scss</li>
                                                                    <li>skill.scss</li>
                                                                </ul>
                                                            </li>
                                                            <li>FooterCont.js</li>
                                                            <li>MainProject.js</li>
                                                            <li>Rolling.js</li>
                                                            <li>Skill.js</li>
                                                        </ul>
                                                    </li>
                                                    <li>assets
                                                        <ul>
                                                            <li>images</li>
                                                            <li>font woff2관련 서체 파일 폴더입니다.</li>
                                                            <li>style
                                                                <ul>
                                                                    <li>style.scss</li>
                                                                    <li>variable.scss</li>
                                                                    <li>reset.css</li>
                                                                    <li>font.css</li>
                                                                    <li>aniKeyframes.css</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>layout
                                                        <li>layStyles
                                                            <ul>
                                                                <li>layTops.scss</li>
                                                                <li>layHeader.scss</li>
                                                                <li>layMain.scss</li>
                                                                <li>layFooter.scss</li>
                                                                <li>layMobile.scss</li>
                                                            </ul>
                                                        </li>
                                                        <li>Top.js</li>
                                                        <li>Header.js</li>
                                                        <li>main.js</li>
                                                        <li>Footer.js</li>
                                                    </li>
                                                </ul>
                                            </li>
                                            </ul>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    사용기술
                                    <div className='textBox'>
                                            <p className='Question'>
                                                <ul className='useTech'>
                                                    <li>React, react-router-dom, JavaScript</li>
                                                    <li>데이터 요청 및 출력 : Axios, JSON</li>
                                                    <li>Tool : GitHub, Visual Studio Code, Figma</li>
                                                </ul>
                                            </p>
                                    </div>
                                </li>
                                <li>
                                    페이지 구성
                                    <div className='textBox'>
                                        <p className='Question'>메인 :
                                            <ul className="useTech">
                                                <li>router를 이용한 내비게이션 설정</li>
                                                <li>map, JSON을 사용한 리스트 작성</li>
                                                <li>navigator.clipboard 와 window.open을 이용한 텍스트 복사 및 새창열림</li>
                                                <li>스크롤 이벤트 시 헤더 숨김/ 활성화</li>
                                                <li>framer-motion을 이용한 컴포넌트간 페이지 전환 애니메이션</li>
                                            </ul>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    문제 및 해결
                                    <div className='textBox'>
                                        <p className='Question'>
                                            <dl className='questionList'>
                                                <dt>Top컴포넌트를 메인페이지만 보여주기</dt>
                                                <dd>메인에만 보여줘야되는 Top 컴포넌트를 route를 걸어 Path를 메인페이지와 동일하게 맞춰주어 해결했다.</dd>
                                                <dt>마우스 스크롤 이벤트 발생시 헤더 활성화 / 비활성화 구현 </dt>
                                                <dd>
                                                    <span className='strong'>페이지를 스크롤 했을때 헤더를 숨기고 보여주는 기능을 구현하러다 생긴 문제점.</span> 초반에 처음 식을 구현할 때 기존 JS처럼 method 부분에 event 를 적용하는 것 처럼 시도하였으나 이를 진행했을 때 'deltaY가 정의되지 않음' 오류가 발생했고, 시간이 걸렸지만 예제 사이트와 공식 문서에서 deltaY는 Wheel이벤트로 지정이 되어있었고 다시 EventListener 의 이벤트를 scroll에서 wheel로 바꿔주고 바로 해결되었다. 
                                                </dd>
                                                <dt>메인페이지 프로젝트 부분 맵 오류</dt>
                                                <dd>이것도 확인해보니 gh-pages에 올라가면서 경로가 바뀌어 생긴 오류였다. 경로를 gh-pages와 맞춰주고 다시 한번 더 시도하니 다시 리스트내용이 보이게 되었다.{/* JSON으로 리스트 내용을 작성한 뒤 메인레이아웃 부분에 useState로 빈배열을 설정해주고, useEffect와 async, await로 JSON 내의 해당 객체를 호출한 뒤 다시 그 값을 하위 컴포넌트에 props으로 부여하여 map으로 내용을 보여주어 해결.  */}</dd>
                                            </dl>
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Sub1;