import React from 'react';
import Header from '../../layout/Header';

import './subStyles/subInner.scss'

function Sub1(props) {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <Header />
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
                                                    <li>Tool : GitHub, Visual Studio Code,Figma</li>
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
                                                <li>navigator.clipboard 와 window.open을 이용한 텍스트 복사 및 새창열림</li>
                                                <li>스크롤 이벤트</li>
                                            </ul>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    문제 및 해결
                                    <div className='textBox'>
                                        <p className='Question'>
                                            <dl>
                                                <dt>ddd</dt>
                                                <dd>ddd</dd>
                                            </dl>
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sub1;