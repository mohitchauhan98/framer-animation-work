import { useState } from 'react'
import './EmojisAnimation.css'
import { motion } from 'framer-motion'

const EmojisAnimation = () => {
    const [showEmoji,setShowEmoji] = useState(false)
    const Variant1 = {
        show : {
            opacity : 1
        },
        hide: {
            opacity : 0
        }
    }
    
    const Variant2 = {
        show : {
            opacity : 1,
            x:0
        },
        hide: {
            opacity : 0,
            x : -100
        }
    }
  return (
    <div>
        <motion.div animate = {showEmoji ? "show" : "hide"} className='emoji-container'> 
            <motion.div
                variants={Variant1}
                className='emoji-box'>
                <motion.span variants = {Variant2} className='emoji'>😘</motion.span>
                <motion.span variants = {Variant2} className='emoji'>🫲</motion.span>
                <motion.span variants = {Variant2} className='emoji'>😀</motion.span>
                <motion.span variants = {Variant2} className='emoji'>😎</motion.span>
                <motion.span variants = {Variant2} className='emoji'>😉</motion.span>
            </motion.div>
            <button onClick={() => setShowEmoji(!showEmoji)}>
                {!showEmoji ? "Show Emoji" : "Hide Emoji"}
            </button>
        </motion.div>
    </div>
  )
}

export default EmojisAnimation