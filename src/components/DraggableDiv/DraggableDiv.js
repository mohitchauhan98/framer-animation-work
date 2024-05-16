import './DraggableDiv.css'
import { motion } from 'framer-motion'

const DraggableDiv = () => {
  return (
    <motion.div 
        drag 
        whileDrag = {{scale : 1.2 , backgroundColor : "deepskyblue"}}
        dragConstraints = {{
            left : -100,
            right : 200,
            top: -100,
            bottom : 400
        }}
        dragElastic = {0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragSnapToOrigin = {true}
        className='drag'>
        <h2>Circle</h2>
    </motion.div>
  )
}

export default DraggableDiv