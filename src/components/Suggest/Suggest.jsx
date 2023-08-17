import React, { useState } from 'react'
import plane from '../../assets/plane.svg'

const Suggest = ({data}) => {

    const [isIconVisible, setIsIconVisible] = useState(false);

    const {title, content} = data;

    const handleMouseEnter = () => {setIsIconVisible(true)}
    const handleMouseLeave = () => {setIsIconVisible(false)}

  return (
    <button className='suggest' onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} >
        <div>
            <div className='crd__title'>{title}</div>
            <div className='crd__subtitle'>{content}</div>
        </div>
        <div className='plane'>
            {isIconVisible && <img src={plane} height={20} width={20} alt="" />}
        </div>
    </button>
  )
}

export default Suggest;