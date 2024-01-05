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
//    const handleCopyClipBoard = async (text: string) => {
//       try {
//         await navigator.clipboard.writeText(text);
//         setTimeout(() => {
//          window.open('https://mail.google.com/mail/u/0/?fs=1&to=kim2006207@gmail.com&tf=cm', '_blank');
//         }, 800);
//       } catch (e) {
//         alert('복사에 실패하였습니다');
//       }
//   };
   

   return (
      <section className='footerWrapper'>
         <article className='topIntro'>
            <p className='rightMent'>contact me!</p>
            <div className='endingMent'>
               <p className='eng50'>thank you for watching</p>
               <p>꾸준히 노력하는 웹 개발자 김동건입니다.</p>
            </div>
         </article>
         <article className='contactMail'>
            <p className='contItalic'>i wait for you!</p>
            <h3 onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&to=kim2006207@gmail.com&tf=cm', '_blank');}} className='emailH3'>
               kim2006207@gmail.com
            </h3>
         </article>
         <div className='goGithub'>
            <p onClick={()=>{window.open('https://github.com/ThioKDG','_blank')}}>go to gitHub</p>
         </div>
      </section>
   );
}

export default FooterCont;