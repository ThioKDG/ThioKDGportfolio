import {motion} from 'framer-motion';

import '../../asset/style/style.scss';
import './subStyles/subInner.scss';

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
                        <p className="value">PortFolio | 반응형 제작</p>
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
                                        React로 포트폴리오 제작을 통해 다시 한번 더 복습하는 의미와 동시에
                                        <span className='mobileInline'> 그동안의 작업물들의 정리와 소개 페이지를 만들기 위해 제작했어요.</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    디렉토리 구조
                                    <div className='textBox'>
                                        <div className='Question txtCenter mobileExpend'>
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
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    사용기술
                                    <div className='textBox'>
                                            <div className='Question'>
                                                <ul className='useTech'>
                                                    <li><span className='strong inBlock'>UI</span> : React, react-router-dom, JavaScript, 반응형 웹</li>
                                                    <li><span className='strong inBlock'>데이터 요청 및 출력</span> : Axios, JSON</li>
                                                    <li><span className='strong inBlock'>Tool</span> : GitHub, Visual Studio Code, Figma</li>
                                                </ul>
                                            </div>
                                    </div>
                                </li>
                                <li>
                                    페이지 구성
                                    <div className='textBox'>
                                        <div className='Question'>
                                            <ul className="useTech">
                                                <li><span className='strong'>인트로(Top)</span>
                                                    <ul className='stepTwo'>
                                                        <li>Main.js 한정으로만 보여주기 위해 route의 path를 Main.js와 똑같이 연결</li>
                                                    </ul>
                                                 </li>
                                                <li><span className='strong'>헤더(Header)</span>
                                                    <ul className='stepTwo'>
                                                        <li>휠 이벤트로 스크롤 시 헤더를 감추고 다시 위로 스크롤 할 경우 헤더 노출</li>       
                                                    </ul>
                                                </li>
                                                <li><span className='strong'>메인(Main) 및 롤링(Rolling)</span>
                                                    <ul className='stepTwo'>
                                                        <li>JSON 파일을 생성하여 따로 프로젝트목록의 내용들을 작성하여 map과 useEffect, state 를 사용하여 보여줌, Rolling 컴포넌트는 처음에 가로형으로 작업한 뒤 transform 과 translate-origin으로 축을 바꾸어 방향을 전환해줌</li>       
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="strong">푸터(Footer)</span>
                                                    <ul className="stepTwo">
                                                        <li>이메일, 깃허브 링크를 window.open을 이용하여 새창으로 열리도록 구현하였다.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="strong">서브페이지(Sub1,2...)</span>
                                                    <ul className="stepTwo">
                                                        <li>메인페이지 프로젝트 결과보고서 링크 클릭 시 현재와 같은 페이지로 이동하도록 경로 설정을 해준다.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="strong">페이지없음(NotFoundPage)</span>
                                                    <ul className="stepTwo">
                                                        <li>아직 구현이 안된 페이지링크 클릭시 404 error 페이지로 넘겨준다.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    문제 및 해결
                                    <div className='textBox'>
                                        <div className='Question'>
                                            <dl className='questionList'>
                                                <dt>
                                                    addEventListener의 스크롤 이벤트 사용시 deltaY값이 적용 안됨
                                                </dt>
                                                <dd>
                                                    <div className='problem'>
                                                        <span className='strong'>why? :</span>아래와 같이 코드 작성시 오류는 없으나 이벤트는 반응이 없다.
                                                    </div>
                                                    <div className='mB20'>
                                                        <img src={path + '/image/sub/qna1Problem.png'} alt="문제가 있는 코드 사진" />
                                                    </div>
                                                    <div className='solution'>
                                                        <span className='strong'>A</span> React에서의 deltaY 함수는 scroll이 아닌 wheel이벤트로 구분이 되어있어 addEventListener 의 'scroll'을 'wheel'로 바꾸자 정상적으로 작동 되었다.
                                                    </div>
                                                    <div className='mB20'>
                                                        <img src={path + '/image/sub/qna1.png'} alt="수정 된 코드" />
                                                    </div> 
                                                </dd>
                                                <dt>gh-pages deploy 후 메인 컴포넌트 불러오지 못함</dt>
                                                <dd>
                                                    <div className='problem'>
                                                        <span className='strong'>why? </span>gh-pages를 사용하여 deploy를 한 뒤 실제 페이지에는 경로가 바뀌어<span className='dBlock'></span> 컴포넌트를 못불러오는 상황이 발생했다.
                                                    </div>
                                                    <div className='solution'>
                                                        <span className='strong'>A </span>
                                                        Github pages 로 올리다보니 경로가 다시 수정되어야 했다. route 경로를 '/' 에서 '/repo name' 으로 변경하니 정상적으로 컴포넌트가 불러와졌다.
                                                    </div>
                                                </dd>
                                                <dt>메인페이지 - 아이폰에서 동영상 재생이 안된다?!</dt>
                                                <dd>
                                                    <div className='problem'>
                                                        <span className='strong'>why? </span> 특정기기(IOS) 에서 접속시 메인페이지의 비디오가 자동재생이 안된다?
                                                    </div>
                                                    <div className='solution'>
                                                        <span className='strong'>A </span>
                                                        모바일 페이지는 어떻게 보일까하고 들어갔으나 자동재생이 안되는 문제가 생겨 video 태그에 문제가 있는 줄 알고 계속 살펴봤지만 생각하는 것과는 다른 문제였다. IOS의 경우는 video 태그에 'playsinline' 부분을 넣어줘야 자동재생이 되며 이마저도 IOS 10 버전 이후의 아이폰은 '절전모드' 가 켜져있으면 동영상 자동재생이 불가하다는 것이 원인이였다.
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
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