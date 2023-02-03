import { useEffect } from 'react';
import './compStyle/footerStyle.scss';

function FooterCont(props) {
   // const url = 'https://gmail.com';
   // const openUrl = (text) => {
   //    navigator.clipboard.writeText(text);
   //    alert('복사되었습니다! 3초 뒤 gmail 페이지도 같이 열려요!');
   //    setTimeout(() => {
   //       window.open(text);
   //    }, 3000);

   // }
   const handleCopyClipBoard = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        alert('이메일 복사 완료! 새 창으로 gmail까지 이동할게요~');
        setTimeout(() => {
         window.open('https://gmail.com', '_blank');
        }, 800);
      } catch (e) {
        alert('복사에 실패하였습니다');
      }
  };
   

   return (
      <section className='footerWrapper'>
         <article className='topIntro'>
            <p className='rightMent'>contact me!</p>
            <div className='endingMent'>
               <p className='eng50'>thank you for watching</p>
               <p>활기찬 프론트엔드 개발자 김동건입니다.</p>
            </div>
         </article>
         <article className='contactMail'>
            <p className='contItalic'>i wait for you!</p>
            <h3 onClick={() => {handleCopyClipBoard('kim2006207@gmail.com')}} className='emailH3'>
               kim2006207@gmail.com
            </h3>
            <p className='normalW'>메일을 보내주시면 평균기준 3일내로 답장드려요!</p>
         </article>
         <div className='goGithub'>
            <p onClick={()=>{window.open('https://github.com/ThioKDG','_blank')}}>go to gitHub</p>
         </div>
      </section>
   );
}

export default FooterCont;