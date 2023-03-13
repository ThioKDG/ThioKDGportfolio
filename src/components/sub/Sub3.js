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
                
            </section>
        </motion.div>
    );
}

export default Sub3;