import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white flex items-center justify-center gap-3 text-[18px] cursor-pointer font-semibold hover:underline underline-offset-8 mb-3 '>
        <Icon/>
        <h1 className=''>{name}</h1>

      
    </div>
  )
}

export default HeaderItem
