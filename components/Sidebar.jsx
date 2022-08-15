import React from 'react';
import MenuIcon from '../assets/bars-solid.svg'
import Xicon from '../assets/x-solid.svg'
import { motion, AnimatePresence } from "framer-motion"
import autoprefixer from 'autoprefixer';

const Sidebar = () => {
    const [open ,setOpen] = React.useState(false);
    function toggleSide(){
        setOpen(prevState =>{
            return !prevState
        })
    }

  return (
    <>
    <AnimatePresence>
    {!open ? 
    <motion.div 
    className='border-r-2 border-[gray] w-fit h-[100vh] flex  justify-center'
    initial={{width:0}}
    animate={{width:"fit-content"}}
    exit={{opacity:0}}
    >
        <span onClick={toggleSide} className='fill-white p-5 m-0'><MenuIcon width='50px' /></span>
    </motion.div>
    :
    <motion.div className='border-r-2 border-[gray] w-[10vw] h-[100vh] flex  justify-between font-bold' initial={{width:0}}
    animate={{width:"10vw"}}>
        <div className='flex flex-col items-start gap-4 mt-4 text-2xl'>
            <button>Latest</button>
            <button>Upcoming</button>
        </div>
        <div onClick={toggleSide} className='fill-white p-1'>
                <Xicon width="20px" />
        </div>
    </motion.div>}
        </AnimatePresence>
    </>
  )
}

export default Sidebar