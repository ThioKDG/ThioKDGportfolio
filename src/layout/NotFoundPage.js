import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

import './layStyles/layMain.scss';

function NotFoundPage() {
   const path = process.env.PUBLIC_URL;

   return (
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
         <section className='notFound'>
            <div className='wrapper'>
               <p className='goWay'>
                  <img src={path + '/image/main/404.gif'} alt="NotFoundPage" />
               </p>
               <h3 className='noHere'>404 ERROR</h3>
               <p className='backMain'>헉..! 아직 여기에는 아무것도 없네요..?</p>
               <div className='gotoBtn'><Link to="/ThioKDGportfolio">메인으로</Link></div>
            </div>
         </section>  
      </motion.div>
   );
}

export default NotFoundPage;