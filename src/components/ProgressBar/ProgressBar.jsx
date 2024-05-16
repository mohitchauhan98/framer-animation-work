import React from 'react'
import { motion } from 'framer-motion'
import './ProgressBar.css'

const ProgressBar = () => {
  return (
    <div className='progress-container'>
        <div className='progress-bar'>
            <motion.div animate = {{
                    width : '100%'
                }}
            transition = {{
                duration : 10
            }}
            className='pb-inner'></motion.div>
        </div>
    </div>
  )
}

export default ProgressBar