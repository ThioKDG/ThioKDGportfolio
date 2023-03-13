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
                        <ol className='QAlist'>
                            <li>
                                팀, 프로젝트 소개
                                <ul>
                                    <li>팀명 : 네카라쿠배</li>
                                    <li>팀원 및 담당서브페이지 : 김동건(메인페이지), 김지예(수강신청), 박이슬(홍보센터 &gt; 공지사항),주서현(수강생후기 &gt; 수강후기)</li>
                                    <li>담당 웹페이지 : 넷스쿨라이브</li>
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