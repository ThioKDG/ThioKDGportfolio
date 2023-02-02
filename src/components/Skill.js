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
                     <h3 className='techTit'>HTML</h3>
                     <ul className="techInfo">
                        <li>웹 접근성을 고려한 시멘틱 태그</li>
                        <li>미디어 쿼리를 이용한 반응형 웹 제작</li>
                     </ul> 
                  </article>
                  <article className="techIntro">
                     <h3 className='techTit'>CSS</h3>
                     <ul className="techInfo">
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
                        <li>Map, Filter, Reduce 등 고차 함수</li>
                        <li>함수 setTimeout, setInterval</li>
                        <li>콜백함수, promise, async, await</li>
                        <li>런타임 node.js</li>
                     </ul> 
                  </article>
                  <article className="techIntro">
                     <h3 className='techTit'>React</h3>
                     <ul className="techInfo">
                        <li>Hook 사용, state, REF 등을 이용</li>
                        <li>계속 공부 중 ...</li>
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
                     <h3 className='techTit'>photoshop illustrator figma</h3>
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