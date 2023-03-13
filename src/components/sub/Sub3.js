import {motion} from 'framer-motion';

import '../../asset/style/style.scss';
import './subStyles/subInner.scss';

function Sub3(props) {
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
                    <p className="value">HTML, CSS / 팀프로젝트</p>
                    <h3 className='title'><span>넷스쿨라이브 클론코딩</span></h3>
                    <p className='date'>2022 november</p>
                    <div className='goTo'>
                        <p onClick={() => {window.open('https://ezen-nklcb.github.io/NETschoolLIVE/', '_blank')}}>페이지 바로가기</p>
                    </div>
                </div>
                <div className='thumBox'>
                    <img src={path + '/image/sub/Thum_nklcb.png'} alt="작업물 썸네일" />
                </div>
            </div>
            <div className="contSpot">
                <div className="Wrapper">
                    <div className="contInner">
                        <ol className='repoNum'>
                            <li>
                                <h3 className='repoH3'>팀, 프로젝트 소개</h3>
                                <ul className='repoCont'>
                                    <li><strong>팀명</strong> : 네카라쿠배</li>
                                    <li><strong>팀원 및 서브페이지</strong> : 김동건(메인페이지), 김지예(수강신청), 박이슬(홍보센터 &gt; 공지사항),주서현(수강생후기 &gt; 수강후기)</li>
                                    <li><strong>담당 웹페이지</strong> : 넷스쿨라이브</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className='repoH3'>진행과정(10.28 ~ 11.11)</h3>
                                <ul>
                                    <li>10월 28일 (첫 모임) - 팀원 배치 및 팀 담당 페이지 선택 역할 분담</li>
                                    <li>10월 31일 (제작 회의) - 깃 관리자 선정 후에 깃 공유 폴더 생성</li>
                                    <li>11월 01일 ~ 11월 03일 – 헤더, 푸터 제작 및 배포</li>
                                    <li>11월 04일 ~ 11월 09일 – 각 담당 페이지 제작</li>
                                    <li>11월 10일 – 작업물 통합 및 경로 맟춤, 통합과정에서 생기는 오류 수정 및 기능 일부 유지보수</li>
                                    <li>11월 11일 – 최종 확인 및 보고서 작성</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="repoH3">담당업무</h3>
                                <ul>
                                    <li>팀 내에서 팀장, 깃 관리자 역할을 맡아 팀의 깃 파일관리, 메인페이지 외 서브페이지 2개 제작을 맡았고 또한 팀원 서브페이지 제작시 생긴 문제사항등을 같이 보조하여 수정하였습니다.</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className='repoH3'>프로젝트 결과</h3>
                                <ul>
                                    <li>
                                        프로젝트 결과는 상세한 기능들의 구현까지는 힘들어서 js로 동작하는 요소의 경우 구현이 안 되어 있거나 애니메이션으로 대체되었으며 그 외의 서브페이지 5개(수강신청, 수강생 후기, 공지사항, 로그인 페이지, 오시는 길) 는 구현됨, 오시는 길의 지도 API는 원래 네이버 지도의 API 였으나 임시로 카카오 맵 API를 사용함
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>부족한 점</h3>
                                <ul>
                                    <li>공용 깃 폴더 경로를 생성한 것 까진 좋았으나 어떤 파일에서 공통적으로 사용할 css 파일이라던가, 파일경로를 세세하게 정하지 않은 것</li>
                                    <li>초반 헤더, 푸터 부분 구현에 시간을 쏟은 것에 비해 결과물은 그렇게 좋지 않은 것(기능 구현 부족)</li>
                                    <li>팀원과의 커뮤니케이션이 의외로 부족하여 사전에 조금 더 시간을 써서 세세한 부분을 조율을 못한 점</li>
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

export default Sub3;