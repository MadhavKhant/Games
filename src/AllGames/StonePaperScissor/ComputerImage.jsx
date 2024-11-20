import { useEffect, useState } from 'react'
import Stone from '../../assets/StonePaperScissor/Stone.png'
import paper from '../../assets/StonePaperScissor/paper.png'
import scissor from '../../assets/StonePaperScissor/scissor.png'


const ComputerImage = ({index}) => {

    let x = [Stone, paper, scissor];

  return (
    <div className="hover:scale-90 transition-all duration-300">
        <img src={x[index-1]} 
            className="w-[100px] h-[100px] rounded-full hover:cursor-pointer 
            scale-x-[-1] transform"
        />
    </div>
  )
}

export default ComputerImage
