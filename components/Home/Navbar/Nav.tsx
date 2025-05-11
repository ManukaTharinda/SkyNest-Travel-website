import React from 'react'
import { TbAirBalloon } from 'react-icons/tb'

const Nav = () => {
  return (
    <div className='bg-blue-950 transistion-all duration-200 h-[12vh] z-[1000]'>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/*logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
            <TbAirBalloon className='w-6 h-6 text-white'/>
          </div>
           <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Sky Nest Camp Ella </h1>
        </div>
      </div>
    </div>
  )
}

export default Nav