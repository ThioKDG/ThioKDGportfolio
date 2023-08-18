import {motion} from 'framer-motion';

import '../../asset/style/style.scss';
import './subStyles/subInner.scss';

function Sub4(props) {
    const path = process.env.PUBLIC_URL;

    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <section className='subContainer'>
            <div className='titleSpot'>
                <div className="titleBox">
                    <p className="value">HTML, CSS, JS / 팀프로젝트</p>
                    <h3 className='title'><span>Studio RHE 클론코딩</span></h3>
                    <p className='date'>2022 december</p>
                    <div className='goTo'>
                        <p onClick={() => {window.open('https://beforechristmas.github.io/StudioRhe/index.html', '_blank')}}>페이지 바로가기</p>
                    </div>
                </div>
                <div className='thumBox'>
                    <img src={path + '/image/sub/Thum_bfXmas.png'} alt="작업물 썸네일" />
                </div>
            </div>
            <div className="contSpot">
                <div className="Wrapper">
                    <div className="contInner">
                        <ol className='repoNum'>
                            <li>
                                <h3 className='repoH3'>팀, 프로젝트 소개</h3>
                                <ul className='repoCont'>
                                    <li><strong>팀명</strong> : 크리스마스전에 끝내조</li>
                                    <li><strong>팀원 및 서브페이지</strong> : 김지훈(팀장 / 서브페이지),  설유미(서브페이지), 김동건(메인)</li>
                                    <li><strong>담당 웹페이지</strong> : Studio RHE</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className='repoH3'>진행과정(12.16 ~ 12.27)</h3>
                                <ul className='repoCont'>
                                    <li>12. 16 - 첫 모임 및 제작 페이지 선정 회의 (제작할 페이지 리스트 작성)</li>
                                    <li>12. 18 ~ 19 - 후보 사이트 중 Studio Rhe 결정 및 컨벤션 진행 후 담당 페이지 분담</li>
                                    <li>12. 20 ~ 26 - 역할 분담에 따른 페이지 제작, 파일 합병 전 까지 유지보수</li>
                                    <li>12. 27 - 깃 합병 및 경로 수정, 합병 시 생겨난 오류 처리 후 프로젝트 발표 및 보고서 작성</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="repoH3">담당업무</h3>
                                <ul className='repoCont'>
                                    <li>팀 내에서 메인페이지 제작 담당 및 프로젝트 결과 발표를 맡음.</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className='repoH3'>프로젝트 결과</h3>
                                <ul className='repoCont'>
                                    <li>
                                        프로젝트 결과는 페이지의 중심인 가로스크롤 및 일정 위치까지 스크롤시 보여지는 애니메이션과 서브페이지의 동영상의 클릭이벤트 까지 구현하여 프로젝트 마감 전 까지 Github를 통한 합병 후 유지보수까지 하여 마무리하였다.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className='repoH3'>부족한 점</h3>
                                <ul className='repoCont'>
                                    <li>마크업시 애니메이션 개별적용을 위해 구조를 변경했었는데 끝내 속성값을 재때 바꾸지 못했음</li>
                                    <li>deltaY를 이용하여 가로스크롤을 구현해서인지는 몰라도 스크롤시 부드럽게 이동하는 부분을 구현은 못하였지만 다른 방법으로 가로스크롤을 시도해봐야 됨.</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className='repoH3'>개인리뷰 / 배우게 된 점</h3>
                                <ul className='repoCont'>
                                    <li>
                                        메인 사이트를 맡으면서 기존 세로형과는 다른 가로형 스크롤을 제작했던 것이 제일 색다른거 같다. deltaY 값을 이용하여 가로스크롤을 구현할 수 있어서 문제가 간단하게 해결될거라 생각했지만 의외로 이것이 복선이 되어 스크롤을 할 때 부드러운 이동을 줄 수 없다는게 흠이 되어 아쉬웠다.
                                        <p>
                                            또한 컨벤션에서 정해뒀던 규칙대로 클래스로 작성하고 또 스타일 값을 줄 때 작성해야되는 코드의 길이가 점점 길어저 의외로 가독성이 줄어들고 또한 오히려 정해놓은 규칙 때문에 클래스명이나 아이디를 작성하는데 시간이 더 걸려서 혹여 컨벤션을 진행 하게 될 경우 좀 더 간결하고 꼼꼼하게 규칙을 정해야 될 거 같다.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            </section>
        </motion.div>
    );
}

export default Sub4;