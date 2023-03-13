import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

import '../../asset/style/style.scss';
import './subStyles/subInner.scss';

function Sub2(props) {
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
                        <p className="value">Api / Tving</p>
                        <h3 className='title'>티빙 클론코딩 / <span className='spanBlock'>영화 정보 사이트</span></h3>
                        <p className='date'>2023 february</p>
                        <div className='goTo'>
                            <p onClick={() => {window.open('https://thiokdg.github.io/cloneTving', '_blank')}}>페이지 바로가기</p>
                        </div>
                    </div>
                    <div className='thumBox'>
                        <img src={path + '/image/main/tving.png'} alt="작업물 썸네일" />
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
                                        OPEN API를 이용하여 티빙 레이아웃을 적용한 SPA 웹페이지를 만들어 보기 위해 제작했어요.
                                        <span className="mobileInline">겸사겸사 영화정보 사이트도 만들어 보고요!</span> 
                                        {/* <span className='mobileInline'> 그동안의 작업물들의 정리와 소개 페이지를 만들기 위해 제작했어요.</span> */}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    디렉토리 구조
                                    <div className='textBox'>
                                        <div className='Question txtCenter mobileExpend'>
                                            <img src={path + '/image/sub/dirTving.jpg'} alt="디렉토리 설명" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    사용기술
                                    <div className='textBox'>
                                            <div className='Question'>
                                                <ul className='useTech'>
                                                    <li><span className='strong inBlock'>UI</span> : React, JavaScript, react-router-dom</li>
                                                    <li><span className='strong inBlock'>데이터 요청 및 출력</span> : Axios, TMDB API</li>
                                                    <li><span className='strong inBlock'>Tool</span> : GitHub, Visual Studio Code</li>
                                                </ul>
                                            </div>
                                    </div>
                                </li>
                                <li>
                                    페이지 구성
                                    <div className='textBox'>
                                        <div className='Question'>
                                            <ul className="useTech">
                                                <li><span className='strong'>헤더(Header)</span>
                                                    <ul className='stepTwo'>
                                                        <li>스크롤 이벤트 / 일정 값의 scrollY값이 도달 될 경우 특정 클래스가 부여되어 불투명해짐</li>       
                                                    </ul>
                                                </li>
                                                <li><span className='strong'>메인(Main)</span>
                                                    <ul className='stepTwo'>
                                                        <li>메인슬라이드 부분에는 식을 이용하여 슬라이드 기능 추가를 해주고, 하단 콘텐츠 부분에는 Swiper 라이브러리를 통한 슬라이드 기능을 구현하여 보여줌 영화데이터들은 TMDB 사이트의 API를 호출하여 화면상에 뿌려주었다. 각 영화를 클릭하면 해당영화의 상세페이지(contents) 컴포넌트로 이어지면서 ID값을 객체로 넘겨준다</li>       
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="strong">상세페이지(Contents)</span>
                                                    <ul className="stepTwo">
                                                        <li>메인페이지에서 해당하는 링크의 영화 ID값을 통해 각 영화의 상세페이지로 넘어갈 수 있도록 ID값을 객체 처리하여 넘겨주고 영화세부안내 부분 API를 호출하여 제목, 내용, 포스터 등의 세부내용을 보여준다.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="strong">영화예고편(movieTrailer)</span>
                                                    <ul className="stepTwo">
                                                        <li>마찬가지로 useParams를 이용하여 id값을 받아 API의 해당 영화의 유튜브 트레일러 ID를 호출하여 'ReactPlayer'으로 영상을 보여준다.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="strong">페이지없음(NotFoundPage)</span>
                                                    <ul className="stepTwo">
                                                        <li>폴더 내 존재하지않는 파일 접근 시 해당 페이지로 이동하여 존재하지 않는 페이지라고 안내한다.</li>
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
                                                    API 호출 실패..?
                                                </dt>
                                                <dd>
                                                    <div className='problem'>
                                                        <span className='strong'>why? :</span> 코드 작성 중 잠꼬대를 한건지.. 작성한 코드자체의 문재였다. movieList 변수에다가 setProgram을 다시 호출하여 빈배열이 할당되어서 생긴 문제.
                                                    </div>
                                                    <div className='mB20'>
                                                        <img src={path + '/image/sub/qna2Problem.png'} alt="문제가 있는 코드 사진" />
                                                    </div>
                                                    <div className='solution'>
                                                        <span className='strong'>A</span> 문제가 되었던 movieList 변수를 지워주고 다시 배열을 setProgram에 받도록 하니 다시 정상적으로 호출이 되었다.
                                                    </div>
                                                    {/* <div className='mB20'>
                                                        <img src={path + '/image/sub/qna2.png'} alt="수정 된 코드" />
                                                    </div>  */}
                                                </dd>
                                                <dt>gh-pages deploy 진행시 Failed to get remote.origin.url 오류 발생</dt>
                                                <dd>
                                                    <div className='problem'>
                                                        <span className='strong'>why? </span> 본래 작업했던 데스크톱이 아닌 다른 기기여서..?
                                                    </div>
                                                    <div className='solution'>
                                                        <span className='strong'>A </span>
                                                        의외로 간단하면서 눈치가 없었으면 계속 물고 늘어질 뻔한 문제였다.. <span className='spanBlock'></span>
                                                        git의 origin.url도 삭제, 수정도 해보고 packge 파일도 들어가보고 결국 계속 해결이 안되니 최후의 방법으로 git 폴더를 아예 초기화를 하려했으나 혹시 몰라 git clone을 하여 deploy를 하니 반영되었다.
                                                        <span className='spanBlock'></span> 
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

export default Sub2;