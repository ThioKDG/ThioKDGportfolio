import './compStyle/skillStyle.scss';

function Skill() {
   return (
      <section className="skillContainer">
         <div className="skillWarpper">
            {/* markup */}
            <div className="skillItem">
               <div className='itemWrapper'>
                  <p className="skillBul">markUp</p>
               </div>
               <div className='techWrapper'>
                  <article className="techIntro">
                     <h3 className='techTit'>HTML5, CSS3</h3>
                     <ul className="techInfo">
                        <li>웹 접근성을 고려한 시멘틱 태그</li>
                        <li>미디어 쿼리를 이용한 반응형 웹 제작</li>
                        <li>CSS를 이용한 애니메이션 사용</li>
                        <li>Flex, Grid, Position 이용</li>
                        <li>전처리기 SCSS 사용</li>
                     </ul> 
                  </article>
               </div>
            </div>
            {/* script react */}
            <div className="skillItem">
               <div className='itemWrapper'>
                  <p className="skillBul">script</p>
                  <p className="skillBul">react</p>
               </div>
               <div className='techWrapper'>
                  <article className="techIntro">
                     <h3 className='techTit'>JAVASCRIPT(ES6+)</h3>
                     <ul className="techInfo">
                        <li>ES6+ 문법</li>
                        <li>let, const 키워드 / 객체 리터럴 방식 사용</li>
                        <li>구조 분해 할당 이용</li>
                        <li>함수 표현식</li>
                        <li>화살표 함수</li>
                     </ul> 
                  </article>
                  <article className="techIntro">
                     <h3 className='techTit'>React</h3>
                     <ul className="techInfo">
                        <li>Hook</li>
                        <li>use State, REF, Effect 이용</li>
                        <li>React-router-dom</li>
                     </ul> 
                  </article>
               </div>
            </div>
            {/* cooperation */}
            <div className="skillItem">
               <div className='itemWrapper'>
                  <p className="skillBul">cooperation</p>
               </div>
               <div className="techWrapper">
                  <article className="techIntro">
                     <h3 className='techTit'>git &amp; github</h3>
                     <ul className="techInfo">
                        <li>bash, VS CODE 터미널 사용</li>
                        <li>git을 통한 작업물 버전 관리</li>
                        <li>gitHub를 통한 프로젝트 관리</li>
                     </ul> 
                  </article>
               </div>
            </div>
            {/* graphic */}
            <div className="skillItem">
               <div className="itemWrapper">
                  <p className="skillBul">graphic</p>
               </div>
               <div className="techWrapper">
                  <article className="techIntro">
                     <h3 className='techTit'>photoshop, illustrator, figma</h3>
                     <ul className="techInfo">
                        <li>이미지 편집</li>
                        <li>프로토타입 제작</li>
                     </ul> 
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Skill;