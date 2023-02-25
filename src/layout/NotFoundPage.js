import { Link, useNavigate, useNavigation } from 'react-router-dom';
import {motion} from 'framer-motion';

import './layStyles/layMain.scss';

function NotFoundPage() {
   const path = process.env.PUBLIC_URL;
   const navigation = useNavigate();

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
               <p className='backMain'>앗! 페이지를 찾을 수가 없어요</p>
               <div className='gotoBtn' onClick={() => navigation(-1)}>
                  <span>
                     이전으로
                  </span>
               </div>
            </div>
         </section>  
      </motion.div>
   );
}

export default NotFoundPage;