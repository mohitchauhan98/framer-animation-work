import { useEffect, useState } from 'react'
import './ExitAndEnterAnimation.css'
import { motion , AnimatePresence } from 'framer-motion'

const ExitAndEnterAnimation = () => {
    const [removeInnerCircle,setRemoveInnerCircle] = useState(false)

    useEffect(() => {
        setTimeout(() => setRemoveInnerCircle(true) , 10000)
    })
  return (
    <div>
        <div className='animation-circle'>
            <AnimatePresence>
                {removeInnerCircle === false && (
                    <motion.div initial = {{opacity : 0}}
                    animate = {{opacity : 1 , y : 40, scale : [null,0.7,0.5,0.1,0.4] , backgroundColor : ["#111111" , "#12ab12" , "#111111"]}}
                    transition={{duration : 5}}
                    exit={{opacity : 0, y : 1000}}
                    className='animation-inside'></motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default ExitAndEnterAnimation