import './GestureButton.css'
import { motion } from 'framer-motion'

const GestureButton = () => {
  return (
    <div className='gesture'>
        <motion.button 
            whileHover={{
                scale : 1.1,
                backgroundColor : '#123123',
                color : '#fff'
            }}
            whileTap={{scale : 0.7}}
            className='gesture-button'>
            Submit
        </motion.button>
    </div>
  )
}

export default GestureButton